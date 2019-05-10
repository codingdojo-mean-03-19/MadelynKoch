const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var NoteSchema = new mongoose.Schema({

    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Note', NoteSchema);