const Pika = require('../models/pika.js')

module.exports = {

    index: function(req, res){

        Pika.find({}, function(err, pikas) {
            if(err){
                console.log(err);
            } else {
                console.log({pikas})
                res.render('index', {pikas});
            }
        })
    },

    new: function(req, res){
        res.render('new', { name: '', age: '', favorite_food: '' } );
    },

    pikas: function(req, res){
        console.log("POST DATA", req.body);
        var pika = new Pika({name: req.body.name, age: req.body.age, favorite_food: req.body.favorite_food});
        pika.save(function(err, document) {
            console.log(document)
            if(err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added pika');
                res.redirect('/pikas/' + document._id);
            }
        })
    },

    profile: function(req, res){
        Pika.findOne({_id: req.params.id}, function(err, pika){
            if(err) {
                console.log(err);
            } else {
                console.log(pika);
                res.render('profile', {pika})
            }
        })
    },
    
    destroy: function(req, res){
        Pika.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log(err);
            } else {
                console.log("successfully removed from pack!");
                res.redirect('/')
            }
        })
    },

    edit: function(req, res){
        Pika.findOne({_id: req.params.id}, function(err, pika){
            if(err) {
                console.log(err);
            } else {
                let obj = {pika, ...pika._doc}
                console.log(obj)
                res.render('new', obj)
            }
        })
    },

    update: function(req, res){
        Pika.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, favorite_food: req.body.favorite_food}, function(err){
            if(err) {
                console.log(err);
            } else {
                console.log("updated");
                res.redirect("/pikas/" + req.params.id);
            }
        })
    }
}