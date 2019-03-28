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

app.get("/ansel", function(request, response) {
	cat_data = {
		name: "Ansel",
		pic: "cat1.jpg",
		favorite_movie: "The Devil Wears Prada", 
		age: "7", 
		hobbies: ["wood working", "salsa dancing"]
	}
	
	response.render('details', {cat: cat_data});
})

app.get("/gretchen", function(request, response) {
	cat_data = {
		name: "Gretchen",
		pic: "cat2.jpeg",
		favorite_movie: "Pineapple Express", 
		age: "1", 
		hobbies: ["fishing", "model airplanes"]
	}
	
	response.render('details', {cat: cat_data});
})

app.get("/tiger", function(request, response) {
	cat_data = {
		name: "Tiger",
		pic: "cat3.jpeg",
		favorite_movie: "Lord of the Rings", 
		age: "4", 
		hobbies: ["knitting", "ceramics"]
	}
	
	response.render('details', {cat: cat_data});
})

app.get("/duluth", function(request, response) {
	cat_data = {
		name: "Duluth",
		pic: "cat4.jpg",
		favorite_movie: "2 Fast 2 furious", 
		age: "5", 
		hobbies: ["swimming", "cycling"]
	}
	
	response.render('details', {cat: cat_data});
})