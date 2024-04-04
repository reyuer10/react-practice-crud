const db = require("../db/db");

exports.getUser = (req, res) => {
  const sql = `SELECT * FROM user_tb`;
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Internal server error" });
    }
    res.status(200).send(results);
  });
};

exports.newUser = (req, res) => {
  const sql = `INSERT INTO user_tb(user_name, user_password) VALUES (?, ?)`;

  const { user_name, user_password } = req.body;
  db.query(sql, [user_name, user_password], (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Internal server error!" });
    }

    res.status(200).send(results);
  });
};

exports.deleteUser = (req, res) => {
  const sql = `DELETE FROM user_tb WHERE user_id = ?`;
  const { user_id } = req.body;

  db.query(sql, [user_id], (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Internal Server error" });
    }

    res.status(200).send({ message: "Successfull deleted user" });
  });
};

// exports.put
