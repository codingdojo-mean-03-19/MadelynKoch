const mongoose = require('../config/mongoose');
const { Schema } = mongoose;

var BookSchema = new Schema({
    title: { 
        type: String,
        required: true,
        minlength: [2, 'Title must be at least 2 characters']
    },
    publicationYear: {
        type: Date,
        required: true,
        max: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
})

var AuthorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, 'First name must be at least 2 characters']
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, 'Last name must be at least 2 characters']
    },
    birthday: {
        type: Date,
        required: true,
        max: Date.now()
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

module.exports = { Author: mongoose.model('Author', AuthorSchema) , Book: mongoose.model('Book', BookSchema) }