const textModel = require('../models/textModel');

module.exports = async (req, res) => {
    const text = await textModel.find(); 
    res.json(text); 
}