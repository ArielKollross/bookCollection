const db = require('../../config/db');

module.exports = {
  indexAll(callback) {
    db.query(`SELECT * FROM books ORDER BY title ASC`, (err, results) =>{
      if(err) throw `Error to get books from database: ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    
    const query = `INSERT INTO books (title, author, read, borrowed)
    VALUES ($1, $2, $3, $4)`;
    
    const values = [
      data.title,
      data.author,
      Boolean(data.read),
      Boolean(data.borrowed)
    ];

    db.query(query, values, (err, results) => {
      if(err) throw `Error to create new book: ${err}`;
    });

    callback();
  }
}