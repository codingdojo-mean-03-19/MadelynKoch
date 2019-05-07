const Product = require('../models/product.js');

module.exports = {

    index: function(req, res) {
        Product.find({}, function(err, products) {
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({ products });
            }
        })
    },

    show: function(req, res) {
        Product.find({_id: req.params.id}, function(err, product) {
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({ product });
            }
        })
    },

    update: function(req, res) {
        objForUpdate = {title: req.body.title, price: req.body.price}

        if(req.body.image) {
            objForUpdate.image = req.body.image;
        }

        Product.findOneAndUpdate({_id: req.params.id}, objForUpdate, {runValidators: true}, function(err, product) {
            if(err) {
                console.log(err);
                res.json({message: "error", error: err});
            } else {
                res.json({ product });
            }
        })
    },

    delete: function(req, res) {
        Product.deleteOne({_id: req.params.id}, function(err) {
            if(err) {
                console.log("Error", err);
                res.json({error: err});
            } else {
                console.log("successfully deleted")
                res.json({message: "success"});
            }
        })
    },

    new: function(req, res) {
        objForUpdate = {title: req.body.title, price: req.body.price}

        if(req.body.image) {
            objForUpdate.image = req.body.image;
        }

        Product.create(objForUpdate, function(err, product) {
            if(err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({ product });
            }
        })
    }
}