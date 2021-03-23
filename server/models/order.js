'use strict';
const {  Model  } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
         static associate(models) {
            // define association here
        }
    }

    Order.init({
        ID: DataTypes.UUID,
    
        name: DataTypes.STRING,
        adress: DataTypes.STRING,
        flat_type: {
            type: DataTypes.ENUM,
            values: ['1-flat', '2-flat', '3-flat', '4-flat', 'studio']
        },
        cleaning_type: {
            type: DataTypes.ENUM,
            values: ['support', 'general', 'repair_around']
        },
        clean_date: DataTypes.DATE,
        createdAt: DataTypes.DATE,

        // options: Option[],
        proposed_price: DataTypes.INTEGER,
        real_price: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        status:  {
            type: DataTypes.ENUM,
            values: ['planned', 'commited', 'processing', 'processed', 'payed', 'cancelled']
        },
        reason: DataTypes.STRING,
        client_comment: DataTypes.STRING,
        order_comment: DataTypes.STRING,
        rate: DataTypes.INTEGER,
    },  {
        sequelize,
        modelName: 'Order',
      });
    return Order;
}