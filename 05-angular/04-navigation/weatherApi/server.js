const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist/client' ));

app.listen(4200);

