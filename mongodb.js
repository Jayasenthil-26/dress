const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ProductCollection")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String
    }
})

const Newproduct = new mongoose.model("userProduct",ProductSchema)

module.exports = Newproduct;