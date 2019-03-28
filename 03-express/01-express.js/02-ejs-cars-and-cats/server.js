var express = require("express");
var app = express();

app.listen(8000, function() {})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cats", function(request, response) {
	response.render('cats')
})

app.get("/cars", function(request, response) {
	response.render('cars')
})

app.get("/newcar", function(request, response) {
	response.render('newcar')
})