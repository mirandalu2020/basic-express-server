'use strict';

function clientError (req, res, next) {
  console.log('404 error hi');
  res.status(404).send('Not Found');
}

module.exports = clientError;