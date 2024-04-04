const mysql = require("mysql2");

const db = mysql.createConnection({
});

const sql = `SELECT * FROM user_tb`;

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database", err);
    return;
  }
  console.log("Connected to database");
});

db.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing query", err.message);
    return res.status(500).json({ error: "Internal server error" });
  } else {
    console.log("Data: ", results);
  }
});

module.exports = db;
