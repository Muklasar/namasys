const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255
    },
    mobile: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    address: {
        type: String,
        required: true,
        max: 1024
    }
})

module.exports = mongoose.model('Form', formSchema)