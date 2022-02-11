'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
     /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
       // define association here
     User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
  }
  User.init({
    nickname: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    image: DataTypes.STRING,
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING
    },
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};