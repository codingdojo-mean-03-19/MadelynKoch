const products = require('../controllers/products.js');

module.exports = function(app) {

    app.get('/products', function(req, res) {
        products.index(req, res);
    })

    app.get('/products/:id', function(req, res) {
        products.show(req, res);
    })

    app.put('/products/:id', function(req, res) {
        products.update(req, res);
    })

    app.delete('/products/:id', function(req, res) {
        products.delete(req, res);
    })

    app.post('/products', function(req, res) {
        products.new(req, res);
    })
}