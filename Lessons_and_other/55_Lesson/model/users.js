const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String
})

module.exports = model('User', UserSchema);