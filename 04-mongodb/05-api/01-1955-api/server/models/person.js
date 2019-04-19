const mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now(),
        setDefaultsOnInsert: true
    }
})

module.exports = mongoose.model('Person', PersonSchema);
