const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    password: String,
    email: String,
})

module.exports = model('user', userSchema)