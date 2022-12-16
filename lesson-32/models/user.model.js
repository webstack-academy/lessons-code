const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.service');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

User.sync();

module.exports = { User }