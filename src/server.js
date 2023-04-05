'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const logger = require('./middleware/logger');
app.use(logger);

const validator = require('./middleware/validator');
const userErr = require('./error-handlers/404');
const serverErr = require('./error-handlers/500');

app.get('/person', validator, (req, res, next) => {
  res.status(200).json(req.query);
});

app.use(userErr);
app.use('*', serverErr);

module.exports = {
  app,
  start: (port) => app.listen(port, ()=> {
    console.log(`Listening on PORT ${port}`);
  }),
};
