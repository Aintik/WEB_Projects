const { model, Schema } = require('mongoose')
module.exports = model("Category", new Schema({
    title: {
        type: String,
        required: true
    }
}))