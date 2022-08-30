const mysql = require('mysql2');
const appConfig = require('./appConfig.js');

const connection = mysql.createConnection({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database,
    multipleStatements: appConfig.multipleStatements
});

module.exports = connection;