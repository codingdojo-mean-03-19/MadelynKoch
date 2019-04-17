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
var flash = require('express-flash');
app.use(flash());
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
}, {timestamp: true});
mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');
const PostSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [CommentSchema]
}, {timestamps: true});
mongoose.model('Post', PostSchema);
const Post = mongoose.model('Post');
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    Post.find({}, function(err, posts){
        if(err) {
            console.log(err);
        } else {
            console.log(posts)
            res.render('index', {posts})
        }
    })
})

app.post('/new', function(req, res) {
    var post = new Post({name: req.body.name, message: req.body.message})
    post.save(function(err) {
        if(err) {
            console.log(err);
            for(var key in err.errors){
                req.flash('posts', err.errors[key].message);
            }
        } else {
            console.log("successfully added a new post");
        }
        res.redirect('/');
    })
})

app.post('/new/:id', function(req, res) {
    Comment.create(req.body, function(err, data) {
        if(err) {
            for(var key in err.errors){
                req.flash('comments', err.errors[key].message);
            }
            console.log(err);
        } else {
            Post.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, function(err) {
                if(err) {
                    console.log('something went wrong');
                } else {
                    console.log("successfully added new comment");
                }
            })
        }
        res.redirect('/');
    })
})

app.listen(8000);