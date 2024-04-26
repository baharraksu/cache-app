const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  port: "3306",
  password: "password",
  database: "Blog_db",
});

module.exports = connection;