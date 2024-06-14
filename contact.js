const express = require("express");
const router = express.Router();
const path = require("path");
const Newproduct = require("../mongodb");

router.get('/contact-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','templates','contact.html'))
})

router.post('/contact-product',async (req,res)=>{

    console.log("port mongo")
    const data = {
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }

    await Newproduct.insertMany([data])

    res.sendFile(path.join(__dirname,'..','insidecontact','show.html'))

})



module.exports = router;