const pokemon = require('../controllers/pokemons.js');

module.exports = function(app){
    app.get('/', function(req, res){
        pokemons.index(req, res);
    })
}