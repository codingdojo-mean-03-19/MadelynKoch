const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        validate: {
            validator: function(val) {
              return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(val);
            },
            message: "Image must be a valid url"
        }
    }
})

module.exports = mongoose.model('Product', ProductSchema);