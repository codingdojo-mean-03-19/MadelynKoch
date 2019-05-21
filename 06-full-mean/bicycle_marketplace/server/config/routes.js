const users = require('../controllers/users.js');
const path = require('path');
const authenticate = require('../authentication');

module.exports = function(app) {
    app.post('/login', function(req, res){
        users.login(req, res);
    });

    app.post('/register', function(req, res) {
        users.register(req, res);
    });

    app.delete('/logout', function(req, res) {
        users.logout(req, res);
    });

    app.use('/api/*', function(req, res, next){
        console.log("check authentication");
        if(req.query.token){
            console.log("there is a token", req.query.token);
            authenticate.verifyToken(req.query.token)
            .then((payload) => {
                res.locals.userId = payload.userId;
                next()
            })
            .catch((err) => {
                res.json({error: "bad token"});
            })
        } else {
            console.log("not logged in");
            res.json({error: "user not logged in"});
        }
    })

    app.post('/api/listings', function(req, res) {
        users.addListing(req, res);
    });

    app.delete('/api/listings/:id', function(req, res){
        users.deleteListing(req, res);
    });

    app.get('/api/listings/show/:id', function(req, res) {
        users.getListing(req, res);
    });

    app.put('/api/listings/:id', function(req, res)  {
        users.updateListing(req, res);
    });

    app.get('/api/users', function(req, res) {
        users.getUsers(req, res);
    });

    app.get('/api/listings', function(req, res) {
        console.log("res locals:", res.locals.userId)
        users.getListings(req, res);
    });

    app.get('/api/users', function(req, res){
        users.getUserById(req, res);
    })

    app.all("*", (req,res,next) => {       
        res.sendFile(path.resolve("./public/dist/public/index.html"))    
    });
}