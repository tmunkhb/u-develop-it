// Connect to database
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'Kairmuun2017',
    database: 'election'
});

module.exports = db;