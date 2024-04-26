const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'tu_host',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'nombre_de_tu_base_de_datos'
});


connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión establecida con la base de datos');
});

// Realizar consultas o acciones en la base de datos
// Por ejemplo:
connection.query('SELECT * FROM tabla', (error, results, fields) => {
    if (error) {
        console.error('Error al realizar la consulta: ', error);
        return;
    }
    console.log('Resultados de la consulta: ', results);
});

// No olvides cerrar la conexión cuando hayas terminado
connection.end();