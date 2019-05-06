const Author = require('../models/author.js');

module.exports = {

    index: function(req, res) {
        Author.find({}, function(err, authors) {
            if(err) {
                console.log(err);
            } else {
                res.json({ authors });
            }
        })
    },

    show: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author) {
            if(err) {
                console.log(err);
            } else {
                res.json({ author });
            }
        })
    },

    update: function(req, res) {
        Author.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}, {runValidators: true}, function(err, author) {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", author })
            }
        })
    },

    delete: function(req, res) {
        Author.deleteOne({_id: req.params.id}, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("doc successfully deleted")
                res.json({message: "success"})
            }
        })
    },

    new: function(req, res) {
        Author.create({name: req.body.name}, function(err, author) {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", author })
            }
        })
    }

}

