const { model, Schema } = require('mongoose');

module.exports = model(
    "Director",
    new Schema({
        name: String,
        surname: String,
        bio: String 
    })
);