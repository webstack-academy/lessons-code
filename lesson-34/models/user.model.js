const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.service');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    profileId: {
        type: DataTypes.STRING,
        allowNull: false
    }

});



User.sync();

module.exports = { User }
const {Profile} = require('./profile.model')