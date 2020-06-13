const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.send('book collection'));

module.exports = routes;