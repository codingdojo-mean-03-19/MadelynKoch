const authors = require('../controllers/authors.js');

module.exports = function(app) {
    app.get('/authors', function(req, res) {
        authors.index(req, res);
    })

    app.get('/authors/:id', function(req, res) {
        authors.show(req, res);
    })

    app.put('/authors/:id', function(req, res) {
        authors.update(req, res);
    })

    app.delete('/authors/:id', function(req, res) {
        authors.delete(req, res);
    })

    app.post('/authors', function(req, res) {
        authors.new(req, res);
    })
}