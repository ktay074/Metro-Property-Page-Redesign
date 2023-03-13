const express = require ('express'); 

const router = express.Router(); 

router.get('/text', require('./routes/getMessageRoute')); 

router.post('/text', require('./routes/sendMessageRoute'));


module.exports = router; 