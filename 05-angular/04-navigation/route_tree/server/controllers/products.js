const Product = require('../models/product.js');

module.exports = {
    index: function(req, res) {
        Product.find({}, function(err, products) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", products});
            }
        })
    },

    show: function(req, res) {
        Product.find({_id: req.params.id}, function(err, product) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: "Success", product });
            }
        })
    },

    new: function(req, res) {
        Product.create({name: req.body.name, price: req.body.price}, function(err, product) {
            if(err) {
                console.log(err);
            } else {
                res.json({message: 'success', product });
            }
        })
    },

    review: function(req, res) {
        console.log(req.body);
        Product.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: req.body.review}}, function(err, product){
            if(err)  {
                console.log(err);
            } else {
                res.json({message: "success", product })
            }
        })
    }
}