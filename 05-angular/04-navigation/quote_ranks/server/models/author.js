const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },

    quotes: {
        type: [{}],
        trim: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    updated_at: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Author', AuthorSchema);