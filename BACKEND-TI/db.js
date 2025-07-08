require('dotenv').config();
const mysql = require('mysql2/promise'); // usa pool con promesas

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306, // <= aquí
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

module.exports = pool;
