var express = require('express');

//Create App
var app = express();

app.use(express.static('public'));

app.listen('3100', () => {
  console.log( 'Express Server is up on port 3100');
});
