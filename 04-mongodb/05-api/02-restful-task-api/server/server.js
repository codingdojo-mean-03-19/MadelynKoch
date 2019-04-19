const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./config/routes.js')(app);

app.listen(8000);