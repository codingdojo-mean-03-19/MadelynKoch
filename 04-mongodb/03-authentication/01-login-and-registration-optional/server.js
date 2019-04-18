var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
var bcrypt = require('bcrypt');
var flash = require('express-flash');
app.use(flash());
var bodyParser = require('body-parser');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
const UserSchema = new mongoose.Schema({
    firstName: {type: String, match: [/^[a-zA-Z]+$/, 'Name must contain only letters'], required: true},
    lastName: {type: String, match: [/^[a-zA-Z]+$/, 'Name must contain only letters'],required: true},
    email: {type: String, required: true, match: [/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, 'Please enter a valid email address'], unique: true}, 
    birthday: {type: Date, required: true},
    password: {type: String, match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Password must contain at least one lowercase letter, uppercase letter, and digit'], required: true}
}, {timestamp: true});
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);
const User = mongoose.model('User');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/new', function(req, res) {

    bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
        var user = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, birthday: req.body.birthday, password: hashed_password})
        user.save(function(err) {
            if(err) {
                console.log(err);
                for(var key in err.errors){
                    req.flash('users', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                if(req.body.password === req.body.passwordConfirm){
                    console.log("successfully added user");
                    console.log(user);  
                    req.session.userid = user._id;         
                    res.render('success', {user});           
                } else {
                    req.flash('users', "Password fields must match")
                    res.redirect('/');
                }
            }
        })
        
    })
    .catch(error => {
        console.log("problem with pw hash")
    })
})

app.post('/login', function(req, res){
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            if(user !== null){
                bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    console.log(result);
                    if(result === true) {
                        req.session.userid = user._id;
                        res.render('success', {user});
                    } else {
                        req.flash('login', "Invalid login");
                        res.redirect('/');
                    } 
                })
                .catch(error => {
                    console.log("something went wrong");
                })
            } else {
                req.flash('login', "Invalid login");
                res.redirect('/');
            }
        } 
    })
})

app.listen(8000)