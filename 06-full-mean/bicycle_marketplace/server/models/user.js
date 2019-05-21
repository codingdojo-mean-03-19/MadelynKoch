const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('../config/mongoose.js');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator(value){
                return validator.isEmail(value);
            }
        }
    },

    password: {
        type: String,
        required: true
    },
    listings: [{
        type: Schema.Types.ObjectId,
        ref: 'Listing'
    }]
}, 
    {
        timestamps: true
    }
);

var ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },

    desc: {
        type: String,
        required: true,
        maxlength: 200
    },

    price: {
        type: Number,
        required: true,
        min: 1
    },

    img_url: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unque' });

UserSchema.pre('validate', function(next) {
    if(!this.isModified('password')) {
        return next();
    } 

    bcrypt
        .hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(next);
});

UserSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
}

module.exports = { User: mongoose.model('User', UserSchema), Listing: mongoose.model('Listing', ListingSchema) };