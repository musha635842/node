const assert = require('assert');
const request = require('request');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Test', function() {
  
  var token = '';

    it('gets request access point', function(done) {
        request('http://localhost:4000/', function(err, res, body) {
            should.not.exist(err);
            should.exist(res);
            assert.ok(res.req.path === '/');
            done(err);
        });
    });

    it('provides token authorization information', function(done) {
      const json = {
        operationName: null,
        query: "mutation access($nickname: String, $password: String) { access(input: {nickname: $nickname, password: $password}) { nickname email password token } }",
              variables: {
                "nickname": "user1",
                "password": "user1"
              }
            };
      request.post({
        url: 'http://localhost:4000/',
        json: json,
      }, function(err, res, body) {
        should.not.exist(err);
        should.exist(res);
        expect(res.statusCode).to.be.equal(200);
        body.should.be.an('object');
        body.should.not.have.property('errors');
        body.should.have.property('data');
        body.data.access.should.have.property('token');
        done(err);
      });
  });

  it('makes post entry on authorization', function(done) {
    const json = {
      operationName: null,
      query: "mutation makePost($title: String!, $body: String!) { makePost(title: $title, body: $body) { id title body published_at userId authorsNickname } }",
      variables: {
        "title": "test post title",
        "body": "test post body"
      }
    };
    request.post({
      url: 'http://localhost:4000/',
      headers: {
        'authorization': token
      },
      json: json,
    }, function(err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).to.be.equal(200);
      body.should.be.an('object');
      body.should.not.have.property('errors');
      body.should.have.property('data');
      body.data.makePost.should.have.property('userId');
      body.data.makePost.should.have.property('authorsNickname');
      done(err);
    });
});

  it('gets posts with pagination', function(done) {
    const json = {
      operationName: null,
      query: "query getPostswithpagination($page: Int, $per_page: Int) { getpostswithpagination(page: $page, per_page: $per_page)  { postcount pagecount hasNextPage posts { body published_at author { email } comments { author { email } } } } }",
      variables: {
        "page": 1,
        "per_page": 10
      }
    };

    request.post({
      url: 'http://localhost:4000/',
      json: json,
    }, function(err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).to.be.equal(200);
      body.should.be.an('object');
      body.should.not.have.property('errors');
      body.should.have.property('data');
      body.data.getpostswithpagination.should.have.property('posts');
      done(err);
    });
});

  it('gets post user comments', function(done) {
    const json = {
      operationName: null,
      query: "query getComments { getcomments { id body published_at author { nickname } post { title body published_at } } }"
      };

    request.post({
      url: 'http://localhost:4000/',
      json: json,
    }, function(err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).to.be.equal(200);
      body.should.be.an('object');
      body.should.not.have.property('errors');
      body.should.have.property('data');
      done(err);
  });
 });
});