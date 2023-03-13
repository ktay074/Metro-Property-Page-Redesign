const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose");

const app = express(); 
const router = require('./router')

require ("dotenv").config(); 
const port = process.env.PORT || 5000; 

// middleware functions
app.use(cors()); 
app.use(express.json());  
app.use(router); 

const uri = process.env.ATLAS_URI; 

// connect to MongoDB database using URI
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    
}).then(() => console.log("Connected to Database"))
.catch((err) => console.log("Database connection error", err));





app.listen(port, () => {
    
    console.log(`Server is running on port: ${port}`)
})