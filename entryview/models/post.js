'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
     /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
    }
  }
  Post.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    authorsNickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    published_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};