const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tag: {
        type: String,
        default: "General"
    },

})

module.exports = mongoose.model("notes", notesSchema)