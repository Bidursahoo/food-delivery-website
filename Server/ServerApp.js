//all declarations of packages
const express = require("express");
const DBConnect = require("./DBConnect");
const app = express();
const port = 3004;

//setup for all dependencies .....

app.listen(port , ()=>{
    console.log("Server started");
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})
app.use(express.json())
DBConnect.then(()=>{
    console.log("Data Base Connected")
})
app.use("/api" , require("./Routes/CreateUser"))
app.use("/api" , require("./Routes/DisplayFoodData"))
app.use("/api" , require("./Routes/OrderDataVisual"))


//all route queries .....

app.get("/" , (req,res)=>{
    res.send("This is Server Side");
})