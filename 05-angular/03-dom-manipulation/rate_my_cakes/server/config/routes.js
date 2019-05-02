const cakes = require('../controllers/cakes.js');

module.exports = function(app) {
    app.get('/cakes', function(req, res) {
        cakes.index(req, res);
    })

    app.get('/cakes/:id', function(req, res) {
        cakes.show(req, res);
    })

    app.post('/cakes', function(req, res) {
        console.log("Made it to the server", req.body);
        cakes.new(req, res);
    })

    app.put('/cakes/:id', function(req, res) {
        cakes.update(req, res);
    })
}