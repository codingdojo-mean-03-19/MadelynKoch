const Person = require('../models/person.js');

module.exports = {
    index: function(req, res){
        Person.find({}, function(err, people){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: people});
            }
        })
    },

    new: function(req, res){
        Person.create({name: req.params.name}, function(err, person){
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: person});
            }
        })
    },

    remove: function(req, res){
        Person.deleteOne({name: req.params.name}, function(err){
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"})
            }
        })
    },

    show: function(req, res){
        console.log(req.params.name);
        Person.findOne({name: req.params.name}, function(err, person){
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: person})
            }
        })
    } 
}