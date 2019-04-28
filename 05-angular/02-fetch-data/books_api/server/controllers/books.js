const { Author, Book } = require('../models/book.js');

module.exports = {

    index: function(req, res) {
        Author.find({}, function(err, authors) {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Success", data: authors});
            }
        })
    },

    show: function(req, res) { 
        Author.findOne({_id: req.params.id}, function(err, author) {
            if(err) {
                console.log(err);
            } else {
                Book.find({_id: {$in: author.books}}, function(err, books) {
                    if(err){
                        console.log(err);
                    } else {  
                        res.json({data: author, books});
                    }
                })
            }
        })
    },

    newAuthor: function(req, res) {
        Author.create({firstName: req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday}, function(err, author){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", data: author})
            }
        })
    },

    newBook: function(req, res) {  
        Author.findOne({firstName: req.body.firstName, lastName: req.body.lastName}, function(err, author){
            if(err) {
                console.log(err);
            } else {
                Book.create({title: req.body.title, publicationYear: req.body.year, author: author}, function(err, book){
                    if(err) {
                        console.log(err);
                    } else {
                        res.json({message: "Success", data: book})
                        Author.findOneAndUpdate({_id: author._id}, {$push: {books: book}}, function(err, author) {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log(author);
                            }
                        })
                    }
                })
            }
        })
    },

    update: function(req, res) {
        var objForUpdate = {};

        if(req.body.firstName) {
            objForUpdate.firstName = req.body.firstName;
        }
        if(req.body.lastName) {
            objForUpdate.lastName = req.body.lastName;
        }
        if(req.body.birthday) {
            objForUpdate.birthday = req.body.birthday
        }

        Author.findOneAndUpdate({_id: req.params.id}, objForUpdate, function(err, author){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", data: author}); 
            }
        })
    },

    deleteBook: function(req, res) {
        Book.deleteOne({_id: req.params.id}, function(err){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success"})
            }
        })
    },

    deleteAuthor: function(req, res) {
        Author.deleteOne({_id: req.params.id}, function(err){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success"})
            }
        })
    }






}
