var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var PikaSchema = new mongoose.Schema({
    name: String,
    age: String,
    favorite_food: String,
}, {timestamps: true});
mongoose.model('Pika', PikaSchema);
var Pika = mongoose.model('Pika');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Pika.find({}, function(err, pikas) {
        if(err){
            console.log(err);
        } else {
            console.log({pikas})
            res.render('index', {pikas});
        }
   })
})

app.get('/pikas/new', function(req, res){
    res.render('new', { name: '', age: '', favorite_food: '' } );
})

app.post('/pikas', function(req, res){
    console.log("POST DATA", req.body);
    var pika = new Pika({name: req.body.name, age: req.body.age, favorite_food: req.body.favorite_food});
    pika.save(function(err, document) {
        console.log(document)
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added pika');
            res.redirect('/pikas/' + document._id);
        }
    })
})

app.get('/pikas/:id', function(req, res) {
    Pika.findOne({_id: req.params.id}, function(err, pika){
        if(err) {
            console.log(err);
        } else {
            console.log(pika);
            res.render('profile', {pika})
        }
    })
})

app.post('/pikas/destroy/:id', function(req, res) {
    Pika.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("successfully removed from pack!");
            res.redirect('/')
        }
    })
})

app.get('/pikas/edit/:id', function(req, res) {
    Pika.findOne({_id: req.params.id}, function(err, pika){
        if(err) {
            console.log(err);
        } else {
            // console.log(pika);
            let obj = {pika, ...pika._doc}
            console.log(obj)
            res.render('new', obj)
        }
    })
})

app.post('/pikas/:id', function(req, res) {
    Pika.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, favorite_food: req.body.favorite_food}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("updated");
            res.redirect("/pikas/" + req.params.id);
        }
    })
})



app.listen(8000)