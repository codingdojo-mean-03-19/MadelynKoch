var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');

require('./config/routes.js')(app);

app.listen(8000)