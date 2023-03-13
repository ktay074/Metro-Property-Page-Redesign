const textModel = require('../models/textModel');

module.exports = async (req, res) => {
    const {text} = req.body;
    console.log(text); 

    const current_text = new textModel({
        text,
        completed: false, 
    })
    const new_text = await current_text.save(); 
    res.json(new_text);
};