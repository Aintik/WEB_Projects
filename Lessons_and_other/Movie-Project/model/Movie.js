const { model, Schema } = require('mongoose');

module.exports = model(
  "Movie",
  new Schema({
    title: String,
    category: String,
    country: String,
    year: Number,
    director: String,
    imdb_score: Number,
    name: {
      type: String,
      default: "None",
    },
    surname: {
      type: String,
      default: "None",
    },
  })
);