var mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var PikaSchema = new mongoose.Schema({
    name: String,
    age: String,
    favorite_food: String,
}, {timestamps: true});

module.exports = mongoose.model('Pika', PikaSchema);