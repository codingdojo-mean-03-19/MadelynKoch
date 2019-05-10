const notes = require('../controllers/notes.js');
const path = require('path');

module.exports = function(app) {
    app.get('/api/notes', function(req, res){
        notes.index(req, res);
    }) 

    app.post('/api/notes', function(req, res){
        notes.new(req, res);
    })

    app.all("*", (req,res,next) => {        
        res.sendFile(path.resolve("./public/dist/public/index.html"))    
    })
}