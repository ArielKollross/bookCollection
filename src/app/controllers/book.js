const Book = require('../model/Book');

module.exports = {
  index(req, res) {
    Book.indexAll((books) => res.render('book/index', {books}));
  },
  create(req, res) {
    return res.render('book/create');
  },
  post(req, res) {
    Book.create(req.body, () => res.redirect('/livros'))
  }
}