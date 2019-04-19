const pikas = require('../controllers/pikas.js');

module.exports = function(app){

    app.get('/', function(req, res) {
        pikas.index(req, res);
    })

    app.get('/pikas/new', function(req, res){
        pikas.new(req, res);
    })

    app.post('/pikas', function(req, res){
       pikas.pikas(req, res);
    })

    app.get('/pikas/:id', function(req, res) {
        pikas.profile(req, res);
    })

    app.post('/pikas/destroy/:id', function(req, res) {
        pikas.destroy(req, res);
    })

    app.get('/pikas/edit/:id', function(req, res) {
        pikas.edit(req, res);
    })

    app.post('/pikas/:id', function(req, res) {
        pikas.update(req, res);
    })

}