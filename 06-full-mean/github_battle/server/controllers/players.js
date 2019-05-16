const Player = require('../models/player.js');

module.exports = {

    index: function(req, res) {
        Player.find({}, null, {sort: {score: -1}}, function(err, players) {
            if(err){
                res.json({error: err});
            } else {
                res.json({ players });
            }
        })
    },

    show: function(req, res) {

        Player.findOne({name: req.params.name}, function(err, player) {
            if(player === null) {
                res.json({error: "no results found"});
                console.log(err);
            } else {
                res.json({ player });
            }
        })
    },

    new: function(req, res) {
        Player.create({name: req.body.name, score: req.body.score, pic: req.body.pic}, function(err, player) {
            if(err) {
                res.json({error: err});
            } else {
                res.json({ player });
            }
        })
    }
}