const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.service');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // Other model options go here
});

Product.sync();

module.exports = { Product }

// `sequelize.define` also returns the model
console.log(Product === sequelize.models.Product); // true