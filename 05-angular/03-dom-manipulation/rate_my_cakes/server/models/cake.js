const mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var CakeSchema = new mongoose.Schema({
    baker: {
        type: String,
        required: true,
        minlength: 2
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(val) {
              return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(val);
            },
            message: props => `${props.value} is not a URL!`
        }
    },
    ratings: {
        type: [Number],
        min: 1,
        max: 5
    },
    comments: {
        type: [String], 
        minlength: 2
    }
})

module.exports = mongoose.model('Cake', CakeSchema);