'use strict';

require('dotenv').config();
const compression = require('compression');
const express = require('express');
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(compression());

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      "default-src": "'self'",
      "script-src": "'self'",
      "style-src": "'self'",
      "connect-src": ["'self'", process.env.REACT_APP_API_URL]
    },
  })
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});