const Quote = require('../models/quote.js');
const helper = require('../helper.js');

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    create: function(req, res){
        console.log("POST DATA", req.body);
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added quote')
                res.redirect('/quotes');
            }
        })
    },
    show: function(req, res){
        Quote.find({}, function(err, quotes){
            if(err) {
                console.log(err);
            } else {
                console.log(quotes);
                res.render('quotes', {quotes, helper});
            }
        }) 
    }
}