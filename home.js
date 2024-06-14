const express = require("express");
const router = express.Router();
const path = require("path")

router.get('/home-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','templates','home.html'))
    
});




module.exports = router;