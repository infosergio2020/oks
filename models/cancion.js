var mongoose = require('mongoose');

var cancionSchema = new mongoose.Schema({
    title: String,
    imagePath: String
});

module.exports = mongoose.model('Song', cancionSchema);