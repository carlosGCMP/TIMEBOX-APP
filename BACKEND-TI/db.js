/*require('dotenv').config();
const mysql = require('mysql2/promise'); // usa pool async moderno

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // este sí es el puerto MySQL
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(() => console.log('✅ Conectado a MySQL correctamente.'))
  .catch(err => console.error('❌ Error de conexión a MySQL:', err));

module.exports = pool;*/
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // ← usa ":" aquí, no "="
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a MySQL local correctamente.');
});

module.exports = connection;

