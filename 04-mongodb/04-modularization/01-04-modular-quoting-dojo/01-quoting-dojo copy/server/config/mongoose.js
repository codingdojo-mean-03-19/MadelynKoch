const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

module.exports = mongoose;