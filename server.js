'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// const PORT = process.env.PORT || 3004;

const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`Listining on PORT ${port}`);
  });
}

app.get('/', (req, res) => {
  res.send('Home server route');
});

app.get('/bad', (req, res) => {
  throw new Error('wrong request,(500) on server');
});

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app: app,
  start: start,
};
