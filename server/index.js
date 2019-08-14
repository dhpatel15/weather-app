const express = require('express');
const parser = require('body-parser');

const app = express();
const router = require('./routes.js');


app.use(parser.json());
app.use(router);

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(4000, function() {
  console.log('listening on port 4000!');
});

