const Player = require('../models/player.js');

module.exports = {
    index: function(req, res) {
        Player.find({}, function(err, players) {
            if(err) {
                console.log(err);
                res.json({ error: err });
            } else {
                res.json({ players });
            }
        })
    },

    new: function(req, res) {
        objToCreate = { name: req.body.name };
        if(req.body.pref) {
            objToCreate.preferred_position = req.body.pref;
        }

        Player.create(objToCreate, function(err, player){
            if(err) {
                console.log(err);
                res.json({ error: err })
            } else {
                res.json({ player });
            }
        })
    },

    delete: function(req, res) {
        Player.deleteOne({ _id: req.params.id }, function(err, player) {
            if(err) {
                console.log(err);
                res.json({ error: err });
            } else {
                res.json({ player });
            }
        })
    },

    update: function(req, res) {
        Player.findOneAndUpdate({ _id: req.params.id}, {status: req.body.status }, function(err, player){
            if(err) {
                console.log(err);
                res.json({ error: err });
            } else {
                res.json({ player })
            }
        })
    }
}