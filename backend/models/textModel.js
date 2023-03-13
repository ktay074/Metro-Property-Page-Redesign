const mongoose = require('mongoose'); 

const textSchema = new mongoose.Schema({
    text: {
        type: String,
    }, 
    completed: {
        type: Boolean,
    }
})

const textModel = mongoose.model('Text', textSchema)

module.exports = textModel