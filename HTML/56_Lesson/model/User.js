const {model, Schema} = require('mongoose');
module.exports = model('user', new Schema({
    first: String,
    file: [
        { type: String }
    ]
}))