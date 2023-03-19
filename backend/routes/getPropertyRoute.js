const propertyModel = require('../models/propertyModel');

module.exports = async (req, res) => {
    const property = await propertyModel.find(); 
    res.json(property); 
}