'use strict';

var express = require('express');
var path = require('path');

// Constants
const PORT = 5555;
const HOST = '127.0.0.1';

// App
var app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);