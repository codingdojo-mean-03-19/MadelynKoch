var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	res.render('index', {title: "my Express project"});
});

app.post('/users', function (req, res) {
	console.log("POST DATA \n\n", req.body);
	res.redirect('/');
})

app.get("/users/:id", function (req, res) {
	console.log("The user id requested is: ", req.params.id);

	res.send("You requested the user with id: " +req.params.id);
})
app.listen(8000, function() {})