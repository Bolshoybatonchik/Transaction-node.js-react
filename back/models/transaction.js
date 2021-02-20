'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Transaction.belongsTo(User, {
        foreignKey: 'recipient_id',
      });
    }
  };
  Transaction.init({
    recipient_id: DataTypes.INTEGER,
    correspondent_id: DataTypes.INTEGER,
    recipient_name: DataTypes.STRING,
    amount: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};