const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');


const app = express();
const url = "localhost";
const port = 3333;

app.use(express.static('public'));
app.use(routes);

app.set("view engine", "njk");

nunjucks.configure("src/app/views", {
  express: app,
});

app.listen(port, () => {
  console.log(`server is running: http://${url}:${port}`)
});