const players = require('../controllers/players.js');
const path = require('path');

module.exports = function(app) {

    app.get('/players', function(req, res) {
        players.index(req, res);
    });

    app.post('/players', function(req, res) {
        players.new(req, res);
    });

    app.get('/players/:name', function(req, res) {
        console.log("MADE IT ERE");
        console.log("routes", req.params.name);
        players.show(req, res);
    })

    app.all("*", (req,res,next) => {       
        res.sendFile(path.resolve("./public/dist/public/index.html"))    
    });

}