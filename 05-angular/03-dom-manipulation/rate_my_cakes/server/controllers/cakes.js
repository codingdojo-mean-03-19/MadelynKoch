const Cake = require('../models/cake.js');

module.exports = {
    index: function(req, res) {
        Cake.find({}, function(err, cakes) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", cakes});
            }
        })
    },

    show: function(req, res) {
        Cake.find({_id: req.params.id}, function(err, cake) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", cake});
            }
        })
    },

    new: function(req, res) {
        Cake.create({baker: req.body.baker, imageUrl: req.body.imageUrl}, function(err, cake) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", cake})
            }
        })
    },

    update: function(req, res) {
        Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: req.body.rating, comments: req.body.comment}},function(err, cake) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", cake});
            }
        })
    }
}