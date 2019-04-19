var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
var helper = require('./helper');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added quote')
            res.redirect('/quotes');
        }
    })
})

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err) {
            console.log(err);
        } else {
            console.log(quotes);
            res.render('quotes', {quotes, helper});
        }
    }) 
})

app.listen(8000)