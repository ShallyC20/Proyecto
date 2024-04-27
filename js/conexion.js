const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'objetos_perdidos'
});

conexion.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa")
    }
});

conexion.end();
