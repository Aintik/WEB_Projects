const {model, Schema} = require('mongoose');
module.exports = model(
  "Movie",
  new Schema({
    title: String,
    year: Number,
    poster: String,
    movie: String,
    trailers: [{ type: String }]
  })
);