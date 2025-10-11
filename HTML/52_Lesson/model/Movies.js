const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: String,
    category: String,
    country: String,
    year: Number,
    director: String,
    imdb_score: Number,
    name: String,
    surname: String
})

module.exports = model('Movie', movieSchema);