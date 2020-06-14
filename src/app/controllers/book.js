const Book = require('../model/Book');

module.exports = {
  index(req, res) {
    Book.indexAll((books) => res.render('book/index', {books}));
  },
  post(req, res) {
    Book.create(req.body, () => res.render('/books'))
  }
}