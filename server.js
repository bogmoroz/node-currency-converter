'use strict';

var express = require('express');
var path = require('path');

// Constants
const PORT = 5555;

// App
var app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, '0.0.0.0');
console.log(`Running on http://0.0.0.0:${PORT}`);