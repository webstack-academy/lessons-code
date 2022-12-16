const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('mysql://webstack:ji8lae0i!hee3In@localhost/webstack');

sequelize.authenticate()
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log('error connecting to db', err)
    });

module.exports = { sequelize }