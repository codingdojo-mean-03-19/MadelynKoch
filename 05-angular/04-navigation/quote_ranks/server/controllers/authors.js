const Author = require('../models/author.js');

module.exports = {

    index: function(req, res) {
        Author.find({}, function(err, authors) {
            if(err) {
                console.log(err);
                res.json({error: err}); 
            } else {
                res.json({ message: 'Success', authors })
            }
        })
    },

    show: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author) {
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({ author });
            }
        })
    },

    updateQuote: function(req, res) {
        if(req.body.quote.length < 4) {
            res.json({error: "The quote must be at least 4 characters"});
        } else {
            Author.findOneAndUpdate({_id: req.params.id}, {$push: {quotes: {quote: req.body.quote, rating: 0}}}, {runValidators: true}, function(err, author) {
                if(err) {
                    console.log(err);
                    res.json({message: "Error", error: err});
                } else {
                    res.json({message: "Success", author })
                }
            })
        }
    },

    updateQuoteRating: function(req, res) {
        Author.findOneAndUpdate({_id: req.params.id, "quotes.quote": req.body.quote}, {$set: {"quotes.$.rating": req.body.rating}}, function(err, author) {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", author })
            }
        })
    },

    updateAuthor: function(req, res) {
        Author.findOneAndUpdate({_id: req.params.id}, {name: req.body.name}, {runValidators: true}, function(err, author) {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", author })
            }
        })
    },

    deleteQuote: function(req, res) {
        Author.findOneAndUpdate({_id: req.params.id}, {$pull: {quotes: {quote: req.body.quote}}}, function(err) {
            if(err) {
                console.log(err);
                res.json({error: err});
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
    },

}