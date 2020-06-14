const db = require('../../config/db');

module.exports = {
  create(data, callback) {
    const query = `INSERT INTO users (name, email, cpf)
    VALUES ($1, $2, $3) RETURNING id`;

    const values = [
      data.name,
      data.email,
     String(data.cpf)
    ];

    db.query(query, values, (err, results) => {
      if(err) throw `Create new user error: ${err}`;

      callback(results.rows[0]);
    });
  },
}