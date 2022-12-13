const mysql = require('mysql2/promise');

let connection = null;

const getConnection = async () => {
    if (connection) {
        return connection
    }

     connection = await mysql.createConnection({
        host: 'localhost',
        user: 'webstack',
        database: 'webstack',
        password: 'ji8lae0i!hee3In'
     })

    return connection
}

module.exports = { getConnection }