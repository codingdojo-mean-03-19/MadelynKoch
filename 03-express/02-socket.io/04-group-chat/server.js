var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

io.on("connection", function(socket){
    var name; 
    socket.on("got_new_user", function(data){
        name = data.msg
    })

    socket.on("post_message", function(data){
        io.emit("update_convo_board", {msg: {name: name, message: data.msg}})
    })
})