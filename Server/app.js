//all declarations of packages
const express = require("express");
const mongooose = require("mongoose");
const dbUrl = require("./db");
const app = express();
const port = 3004;

//setup for all dependencies

app.listen(port , ()=>{
    console.log("Server started");
})

mongooose.connect(dbUrl , {useNewUrlParser : false});
// const foodSchema;



//all route queries

app.get("/" , (req,res)=>{
    res.send("HEllo world");
})