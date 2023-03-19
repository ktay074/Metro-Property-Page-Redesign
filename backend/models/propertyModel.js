const mongoose = require('mongoose'); 

const propertySchema = new mongoose.Schema({
    Address: {
        type: String,
    }, 
    Image: {
        type: String,
    },
    Bedrooms: {
        type: String, 
    }, 
    Bathrooms: {
        type: String, 
    }, 
    Pets: {
        type: String,
    },
    Rent: {
        type: String,
    }
})

const propertyModel = mongoose.model('Property', propertySchema)

module.exports = propertyModel