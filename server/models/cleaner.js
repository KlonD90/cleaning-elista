'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Cleaner extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Cleaner.init({
        ID: DataTypes.UUID,
        UserId: DataTypes.INTEGER,   
        name: DataTypes.STRING,
    },{
        sequelize,
        modelName: 'Cleaner',
    });
return Cleaner
}