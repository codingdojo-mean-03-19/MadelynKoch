const authors = require('../controllers/authors.js');

module.exports = function(app) {

    app.get('/authors', function(req, res) {
        authors.index(req, res);
    })

    app.get('/authors/:id', function(req, res) {
        authors.show(req, res);
    })

    app.put('/authors/:id/new', function(req, res) {
        authors.updateQuote(req, res);
    })

    app.put('/authors/:id/update', function(req, res) {
        authors.updateQuoteRating(req, res);
    })

    app.put('/authors/:id', function(req, res) {
        authors.updateAuthor(req, res);
    })

    app.delete('/authors/:id/quote', function(req, res) {
        authors.deleteQuote(req, res);
    })

    app.post('/authors', function(req, res) {
        authors.new(req, res);
    })
}