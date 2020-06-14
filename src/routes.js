const express = require('express');
const routes = express.Router();
const userController = require('./app/controllers/user');
const bookController = require('./app/controllers/book');

routes.get('/', (req, res) => res.render('user/create'));
routes.post('/user', userController.post);

routes.get('/books', bookController.index);
routes.post('/books', bookController.post);

module.exports = routes;