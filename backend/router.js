const express = require ('express'); 

const router = express.Router(); 

// Main route to retrieve property information
router.get('/', require('./routes/getPropertyRoute')); 

module.exports = router; 