const Task = require('../models/task.js');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, tasks){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", tasks });
            }
        })
    },

    show: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", task });
            }
        })
    },

    new: function(req, res){
        console.log("BODY", req.body);

        Task.create({title: req.body.title, description: req.body.description}, function(err, task){
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: task});
            }
        })
    },

    update: function(req, res){
        var objForUpdate = {};
        console.log("BODY", req.body);
        console.log(req.params);

        if(req.body.title) {
            objForUpdate.title = req.body.title;
        }
        if(req.body.description) {
            objForUpdate.description = req.body.description;
        }
        if(typeof req.body.completed !== "undefined") {
            objForUpdate.completed = req.body.completed;
        }

        Task.findOneAndUpdate({_id: req.params.id}, objForUpdate, function(err, task){
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: task})
            }
        })
    },

    delete: function(req, res){
        Task.deleteOne({_id: req.params.id}, function(err){
            if (err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"})
            }
        })
    }

}