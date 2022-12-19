const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.service');
const { User } = require('./user.model');

const Profile = sequelize.define('Profile', {
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

Profile.hasOne(User, {
    foreignKey: 'profileId'
})

User.belongsTo(Profile)

Profile.sync();

module.exports = { Profile }