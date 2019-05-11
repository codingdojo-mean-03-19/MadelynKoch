const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    preferred_position: {
        type: String,
        enum: ['midfielder', 'goal keeper', 'defender', 'forward']
    },

    status: {
        type: String,
        enum: ['playing', 'not_playing', 'undecided'],
        default: 'undecided'
    }
})

module.exports = mongoose.model('Player', PlayerSchema);