const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/collection-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','templates','collection.html'))
})


module.exports = router;