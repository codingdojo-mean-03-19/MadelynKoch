const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
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