var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
const axios = require('axios')
const session = require('express-session') 

app.use(session({
	secret: 'keyboardkitteh',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 6000}
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/displayData', function(req, res) {
	console.log(req.query['page']);
	axios.get('https://swapi.co/api/' + req.query['dataType'] + '/?page=' + req.query['page'])
	.then(data => {
		res.json(data.data);
	})
	.catch(error => {
		console.log(error)
		res.json({error: "Something went wrong."});
	})
})

app.get('/next', function(req, res) {
	if(req.session.next == true){
		req.session.pageNum += 1;
		
	}
})

app.listen(8000, function(){});