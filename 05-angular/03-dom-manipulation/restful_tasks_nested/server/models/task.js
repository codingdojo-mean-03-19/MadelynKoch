const mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model('Task', TaskSchema)