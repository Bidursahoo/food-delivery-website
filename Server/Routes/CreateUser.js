const express = require("express");
const route = express.Router();
const user = require("../Models/UserModel");
route.post("/createuser" , (req,res)=>{
    try {
        user.create({
            Name:req.body.name,
            Location:req.body.loc,
            Email:req.body.mail,
            Password:req.body.pass
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = route;