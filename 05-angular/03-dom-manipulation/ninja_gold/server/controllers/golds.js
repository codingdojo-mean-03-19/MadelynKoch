const Gold = require('../models/gold.js');

module.exports = {
    index: function(req, res){
        Gold.find({}, function(err, golds){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", golds })
            }
        })
    },

    new: function(req, res){
        Gold.create({amount: req.body.amount, location: req.body.location}, function(err, gold){
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", gold })
            }
        })
    }

}