const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
  mark: String,
  color: String,
  type: String,
  key: String
})

module.exports = model('Car', CarSchema)