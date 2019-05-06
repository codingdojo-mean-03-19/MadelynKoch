const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var ProductSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: true
    },
    reviews: {
        type: [String]
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('Product', ProductSchema);