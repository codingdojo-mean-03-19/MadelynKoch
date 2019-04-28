const books = require('../controllers/books.js');

module.exports = function(app){
    app.get('/authors', function(req, res){
        books.index(req, res);
    })

    app.get('/authors/:id', function(req, res){
        books.show(req, res);
    })

    app.post('/authors', function(req, res){
        books.newAuthor(req, res);
    })

    app.post('/books', function(req, res){
        books.newBook(req, res);
    })

    app.put('/authors/:id', function(req, res){
        books.update(req, res);
    })

    app.delete('/books/:id', function(req, res) {
        books.deleteBook(req, res);
    })

    app.delete('/authors/:id', function(req, res){
        books.deleteAuthor(req, res);
    })

}