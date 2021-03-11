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
    }
  };
  User.init({
<<<<<<< HEAD
    ID: DataTypes.UUID                        ,
=======
>>>>>>> 34f7e98 (base migration)
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};