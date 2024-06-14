const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));


const homeRouter = require('./routes/home')
app.use(homeRouter);

const collectionRouter = require('./routes/collection')
app.use(collectionRouter);

const contactRouter = require('./routes/contact')
app.use(contactRouter);



app.listen(5667,()=>{
    console.log("port connected")
})