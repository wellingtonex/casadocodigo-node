let mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database: 'casadocodigo_nodejs'
    });
} 
 