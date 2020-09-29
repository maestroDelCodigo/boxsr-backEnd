const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'boxsr'
});

connection.connect(
    function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.')
        }
    }
)

module.exports = connection;