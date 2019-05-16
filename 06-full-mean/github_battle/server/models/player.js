const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var PlayerSchema = {
    name: {
        type: String,
        required: true,
        unique: true
    },

    score: {
        type: Number,
        required: true
    },

    pic: {
        type: String,
        required: true
    }

}

module.exports = mongoose.model('Player', PlayerSchema);