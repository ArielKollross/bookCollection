const express = require('express');
const routes = express.Router();
const userController = require('./app/controllers/user');
const bookController = require('./app/controllers/book');

routes.get('/', (req, res) => res.render('user/create'));
routes.post('/user', userController.post);

routes.get('/livros', bookController.index);
routes.get('/livros/cadastro', bookController.create)
routes.post('/livros', bookController.post);

module.exports = routes;