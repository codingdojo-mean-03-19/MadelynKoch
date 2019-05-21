const { User, Listing } = require('../models/user.js');
const { Http } = require('@status/codes');
const authenticate = require('../authentication');

module.exports = {
    login(req, res) {
        
        const { email, password } = req.body;

        console.log("logging in", password, email);

        authenticate.authenticate(email, password)
        .then(function(token){
            console.log('got token', token);
            res.json({token});
        })
        .catch(() => {
            res.json({error: "Invalid login!"});
        })
       
    },

    register(req, res) {
        User.create(req.body)
            .then(user => {
                completeLogin(req, res, user);
            })
            .catch(error => {
                res.status(Http.UnprocessableEntity).json({
                    errors: Object.keys(error.errors).map(
                        key => error.errors[key].message
                        ),
                })
            })
    },

    logout(req, res) {
        console.log('log out');
        req.session.destroy();
        res.clearCookie('userID');
        res.clearCookie('expiration');

        res.json(true);
    },

    addListing(req, res) {
        User.findOne({_id: res.locals.userId}, function(err, user){
            if(user === null) {
                res.json({err: "no user found"})
                console.log(err);
            } else {
                Listing.create(
                    {
                        title: req.body.title, 
                        desc: req.body.desc, 
                        price: req.body.price, 
                        img_url: req.body.img_url, 
                        location: req.body.location, 
                        user: user._id
                    }, 
                    function(err, listing){
                        if(err) {
                            console.log(err);
                            res.json({ err });
                        } else {
                            console.log(user);
                            user.update({$push: {listings: listing}}).exec();
                            res.json({message: "bike added!",  listing });
                        }
                    }
                )
            }
        })
    },

    deleteListing(req, res) {
        Listing.deleteOne({_id: req.params.id}, function(err, listing){
            if(err) {
                res.json({error: err});
            } else {
                res.json({message: "successfully deleted listing"})
            }
        })
    },

    updateListing(req, res) {
        objForUpdate = {};

        if(req.body.title){
            objForUpdate['title'] = req.body.title;
        }
        if(req.body.desc){
            objForUpdate['desc'] = req.body.desc;
        }
        if(req.body.price){
            objForUpdate['price'] = req.body.price;
        }
        if(req.body.location){
            objForUpdate['location'] = req.body.location;
        }

        console.log(objForUpdate);

        Listing.findOneAndUpdate({_id: req.params.id}, objForUpdate, {runValidators: true}, function(err, listing){
            if(err){
                res.json({error: err});
            } else {
                res.json({ listing });

            }
        })
    },

    getUsers(req, res){
        User.find({}, function(err, users) {
            if(err){
                res.json({ err });
            } else {   
                res.json({ users });     
            }
        })
    },

    getUserById(req, res) {
        User.find({_id: res.locals.userId}, function(err, user){
            if(err) {
                res.json({err});
            } else {
                res.json({user});
                console.log(user)
            } 
        }).populate('listings');
    },

    getListings(req, res){
        Listing.find({}, function(err, listings) {
            if(err) {
                res.json({err});
            } else {
                res.json({ listings });
            }
        })
    },

    getListing(req, res) {
        Listing.find({_id: req.params.id}, function(err, listing) {
            if(err) {
                res.json({err});
            } else {
                res.json({ listing });
            }
        })
    }
}