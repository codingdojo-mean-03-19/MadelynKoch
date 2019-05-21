const { User, Listing } = require('./models/user.js');
const { Http } = require('@status/codes');
const jwt = require('jsonwebtoken');
const SECRET = "h875tuhyhfthygfthygtgdbfgmyjuhnjmugfhgvdfgnhfbm";

const Prom = {
    then(resolvingFunction) {
        
    }
}

module.exports = {

    authenticate(email, password) {
        console.log(email, password);
        let tempUser
        return User.findOne({email})
        .then(user => {
            tempUser = user;
            return User.validatePassword(password, user.password)
        })
        .then(isValid => {
            if (!isValid) {
                throw new Error("Invalid credentials");
            }
            console.log("successful login");
            const token = jwt.sign({userId: tempUser._id}, SECRET);
            return Promise.resolve(token);
        })
    },

    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, SECRET, function(err, verifiedJwt){
                if(err !== null){
                    reject(err);
                } else {
                    resolve(verifiedJwt);
                }
            });
        })
    }
}