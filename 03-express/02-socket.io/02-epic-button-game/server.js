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

var count = 0;

io.on("connection", function(socket){
    
    socket.on("push_epic", function(data){
        console.log(data.msg);
        count++;
        io.emit("update_count", { msg: count });
    })
    socket.on("push_reset", function(data){
        console.log("reset!")
        count = 0;
        io.emit("update_count", {msg: count});
    })
})
