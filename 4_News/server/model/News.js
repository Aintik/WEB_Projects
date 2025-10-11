const { model, Schema } = require('mongoose')
module.exports = model("New", new Schema({
    title: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    categories: [
        {
            // type: String
            type: Schema.ObjectId,
            ref: 'Category',
        }
    ],
    location: {
        type: Schema.ObjectId,
        ref: 'Location'
    },
    informations: [
        {
            title: {
                type: String,
                require: true,
            },
            img: {
                type: String,
            }
        }
    ],
    viewed: {
        tupe: Number,
        default: 0
    }

}, { timestamps: true }))