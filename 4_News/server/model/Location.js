const { model, Schema } = require('mongoose')
module.exports = model("Location", new Schema({
    title: {
        type: String,
        required: true
    }
}))