
var mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model('Quote', QuoteSchema);