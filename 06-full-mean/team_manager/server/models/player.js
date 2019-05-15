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
        enum: ['Midfielder', 'Goal Keeper', 'Defender', 'Forward', 'None'],
        default: 'None'
    },

    status: {
        type: {},
        default: {'1': 'undecided', '2': 'undecided', '3': 'undecided'}
    }
})

module.exports = mongoose.model('Player', PlayerSchema);