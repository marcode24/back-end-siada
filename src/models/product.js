const { DataTypes } = require('sequelize');
const { database } = require('../db/config');

const Product = database.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    productCode: { type: DataTypes.BIGINT, allowNull: false, },
    productName: { type: DataTypes.STRING, allowNull: false, },
    stock: { type: DataTypes.NUMBER, allowNull: false },
    price: { type: DataTypes.DOUBLE },
    enabled: { type: DataTypes.BOOLEAN },
});

module.exports = Product;