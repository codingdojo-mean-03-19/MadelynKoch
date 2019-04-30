const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var GoldSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Gold', GoldSchema);