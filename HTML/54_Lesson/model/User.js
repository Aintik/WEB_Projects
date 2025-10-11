const { model, Schema } = require('mongoose')

const shape = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});



module.exports = model('user', shape )