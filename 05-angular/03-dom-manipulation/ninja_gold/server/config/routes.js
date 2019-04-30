const golds = require('../controllers/golds.js');

module.exports = function(app) {
    app.get('/gold', function(req, res){
        golds.index(req, res);
    })
    app.post('/gold', function(req, res) {
        golds.new(req, res);
    })
}