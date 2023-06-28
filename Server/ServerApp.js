//all declarations of packages
const express = require("express");
const FoodDataModel = require("./Models/FoodDataModel");
const DBConnect = require("./DBConnect");
const app = express();
const port = 3004;

//setup for all dependencies .....

app.listen(port , ()=>{
    console.log("Server started");
})
app.use(express.json())
app.use("/api" , require("./Routes/CreateUser"))
DBConnect.then(()=>{
    console.log("Data Base Connected")
})
const foodData = FoodDataModel
foodData.find({}).then();


//all route queries .....

app.get("/" , (req,res)=>{
    res.send("HEllo world");
})