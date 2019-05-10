const Note = require('../models/note.js');

module.exports = {

    index: function(req, res) {
        Note.find({}, function(err, notes){
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({ notes });
            }
        })
    },

    new: function(req, res) {
        Note.create({message: req.body.message}, function(err, note){
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({message: "success"});
            }
        })
    }
}