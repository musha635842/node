'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Comment.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    }
  }
  Comment.init({
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
    postId: DataTypes.INTEGER,
    published_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};