const players = require('../controllers/players.js');
const path = require('path');

module.exports = function(app) {

    app.get('/players', function(req, res) {
        players.index(req, res);
    });

    app.post('/players', function(req, res) {
        players.new(req, res);
    });

    app.delete('/players/:id', function(req, res) {
        players.delete(req, res);
    });

    app.put('/players/:id', function(req, res) {
        players.update(req, res);
    });

    app.all("*", (req,res,next) => {       
         res.sendFile(path.resolve("./public/dist/public/index.html"))    
    });

}