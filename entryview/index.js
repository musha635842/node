const { ApolloServer, AuthenticationError, UserInputError, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { models } = require('./models');
const db = require('./models');
var express = require('express');
var app = express();
app.use(express.static(__dirname));
const formidable = require("formidable");
const fs = require("fs");
const nodemailer = require("nodemailer");
const queue = require('bull');
const AWS = require("aws-sdk");
const S3 = new AWS.S3({
  signatureVersion: "v4",
  apiVersion: "2006-03-01",
  accessKeyId: "YOUR_ACCESS_KEY_HERE",
  secretAccessKey: "SECRET_ACCESS_KEY_HERE",
  region: "REGION",
});

const typeDefs = gql`

  type Post {
    id: Int
    title: String
    body: String
    author: User
    published_at: String 
    comments: [Comment]
  }

  type PostsWithPagination {
    postcount: Int
    pagecount: Int
    hasNextPage: Boolean
    posts: [Post]
  }
  
  type User {
    nickname: String
    email: String
    posts: Post
  }

  type Comment {
    id: Int
    body: String
    author: User
    post: Post
    published_at: String 
  }

  type Query {
    root: String
    getpost(id: Int): Post
    getposts: [Post]
    getpostswithpagination(page: Int, per_page: Int): PostsWithPagination
    getcomment(id: Int): Comment
    getcomments: [Comment] 
  }

  type Mutation {
    root: String
    access(input: AccessInput!): AccessResponse
    makePost(title: String!, body: String!, published_at: String): makePostResponse
    makeComment(body: String!, postId: Int!): makeCommentResponse
  }

  input AccessInput {
    nickname: String
    password: String
  }
  
  type AccessResponse {
    nickname: String
    email: String
    password: String
    token: String
  }

  type makePostResponse {
    id: Int
    title: String
    body: String 
    published_at: String
    userId: Int
    authorsNickname: String
  }

  type makeCommentResponse {
    id: Int
    body: String
    published_at: String
    postId: Int
    userId: Int
    authorsNickname: String 
  }
`;

const resolvers = {
     Query: {
      async getpost(root, { id })
      {
        return await models.Post.findByPk(id);
      },
      async getposts(root, args)
      {
        return await models.Post.findAll();
      },
      async getpostswithpagination(root, args)
      {
        count = await models.Post.findAndCountAll()
        if (args.page == 0) {
          throw new UserInputError('Entry information absent');
          }
          return models.Post.findAndCountAll({ limit: args.per_page, offset: ((args.page - 1)  * args.per_page), order: [["published_at", "DESC"]]}).then(query => {
            var hasNextPage = true;
            if ((query.count / args.per_page) <= args.page) {
            hasNextPage = false;
            }
            return {
              postcount: query.count,
              pagecount: Math.ceil(query.count / args.per_page),
              posts: query.rows,
              hasNextPage: hasNextPage
            }
          })
      },
      async getcomment(root, { id })
      {
        return await models.Comment.findByPk(id);
      },
      async getcomments(root, args)
      {
        return await models.Comment.findAll();
      },
    },
    Mutation: {
        async access(root, { input }) {
        const user = await models.User.findOne({ where: input });
        if (user) {
          user.token = jwt.sign({ id: user.id }, 'mySecret');
          return user;
        }
        throw new AuthenticationError('Access authorization information absent');
      },
      async makePost(root, { body, title, published_at }, user ) {
       if (user == null) {
          throw new AuthenticationError('Access authorization information absent');
       }
       if (!title || !body) {
        throw new UserInputError('Entry information absent');
       }
       if (!published_at) {
         published_at = Date.now()
       }
       return models.Post.create({
          userId: user.id,
          authorsNickname: user.nickname,
          body,
          title,
          published_at,
        });
      },
      async makeComment(root, { body, postId }, user) {
       if (!user) {
          throw new AuthenticationError('Access authorization information absent');
       }
       return models.Comment.create({
        userId: user.id,
        postId,
        authorsNickname: user.nickname,
        body,
        published_at: Date.now(),
      });
      },
    },
  Comment: {
    async author(comment) {
        return comment.getUser();
    },
    async post(comment) {
        return comment.getPost();
    },
  },
  User: {
    async posts(user) {
       return user.getPosts();
    },
  },
  Post: {
    async author(post) {
      return post.getUser();
    },
    async comments(post) {
      return post.getComments();
    },
  },
};


const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const verifyAccess = async (token) => {
      try {
        if (!token) return null;
        const { id } = await jwt.verify(token, 'mySecret');
        const user = await models.User.findByPk(id);
        return user;
      } catch (error) {
        throw new AuthenticationError('Access authorization information absent');
      }
    };
    const token = (req.headers && req.headers.authorization) || '';
    const user = await verifyAccess(token)
        return user;
    },
});

app.post("/upload-account-pic", express.static(__dirname), (req, res, next) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
     if (err) {
      next(err);
      return;
    }
    const file = files.account_pic;
    const filetyperestriction = (file) => {
      const type = file.mimetype.split("/").pop();
      const filestoretype = ["jpg", "png"];
      if (filestoretype.indexOf(type) === -1) {
        return false;
      }
      return true;
    };
    if (!filetyperestriction(file)) {
    fs.unlinkSync(files.account_pic.filepath);
    res.send(`Picture type service restriction <br/> <a href="./">Store page</a>`);
    return;
    }
     S3.putObject(
      {
        Bucket: "YOUR_BUCKET_NAME_HERE",
        Key: files.account_pic.originalFilename,
        ContentType: files.account_pic.mimetype,
        Body: fs.createReadStream(files.account_pic.filepath),
      },
     async (data) => {
       models.User.update({ image: files.account_pic.newFilename}, {
           where: {
          id: fields.userId
          }
      });
     }
  );
  res.send(`Picture preview: <hr/><img src="${files.account_pic.newFilename}"max-height="300"max-width="300"><hr /><a href="./">Store page</a>`);
 });
});

app.post("/request-report", (req, res, next) => {
  const reportqueue = new queue('reportqueue', {
    redis: {
      host: '127.0.0.1',
      port: 6379,
      password: 'root'
    }
  });
  const options = {
   delay: 0,
   attempts: 1
  };
  reportqueue.add(options);
  function processreport() {
 const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

  const reportdata = await db.sequelize.query(`SELECT COUNT(DISTINCT "Comments"."id") as Comments, COUNT(DISTINCT "Posts"."id") as Posts, "Users"."email" as Email, "Users"."nickname" as Nickname FROM "Posts" INNER JOIN "Comments" ON "Posts"."userId" = "Comments"."userId" JOIN "Users" ON "Posts"."userId" = "Users"."id" WHERE "Posts"."published_at" BETWEEN '${fields.begin_period}' AND '${fields.end_period}' GROUP BY Email, Nickname ORDER BY (CAST(COUNT(DISTINCT "Comments"."id") AS FLOAT) + CAST(COUNT(DISTINCT "Posts"."id") AS FLOAT)) / 10`, { type: db.sequelize.QueryTypes.SELECT });
 
  var htmlreport =''; 

  for(var i=0; i < reportdata.length; i++){
  htmlreport += '<tr><td>'+ reportdata[i].nickname + '</td><td>' + reportdata[i].email + '</td><td>' + reportdata[i].posts + '</td><td>' + reportdata[i].comments + '</td></tr>';
 }
 htmlreport ='<table border="1"><tr><th>Nickname</th><th>Email</th><th>Posts</th><th>Comments</th></tr>'+ htmlreport +'</table>';

 let transporter = nodemailer.createTransport({
   host: "SERVICEADDRESS",
   port: "PORTNUMBER",
   secure: false,
   auth: {
     user: "ACCOUNT", 
     pass: "ACCESS",
   },
 });

  await transporter.sendMail({
   from: 'ADDRESS@ADDRESS.COM', 
   to: fields.email_address, 
   subject: "SUBJECT",
   text: 'TEXT', 
   html: htmlreport
 });
 });
 res.send(`Report generation started </br> <a href="./">Production page</a>`);
}
reportqueue.process(async job => { 
  return await processreport(); 
});
});

app.listen(process.env.STOREPORT)
  console.log(`Picture store: ${process.env.ADDRESS}`)

server.listen().then(({ url }) => {
  console.log(`Entry view: ${url}`);
});