const express = require("express");
const route = express.Router();
const user = require("../Models/UserModel");
const { body, validationResult } = require("express-validator");
route.post(
  "/signup",
  /*This is to validate if req.body.mail is an email or not*/
  body("mail", "Please enter a valid email").isEmail(),
  /*This is to validate if req.body.name is having minimum 4 characters or not*/
  body("name", "Name must be of minimum of 4 characters").isLength({ min: 4 }),
  /*This is to validate if req.body.pass is having minimum 6 characters or not*/
  body("pass", "Password Must be minimum of 6 Characters").isLength({ min: 6 }),
  (req, res) => {
    /*Storing validation result*/
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
      user.create({
        Name: req.body.name,
        Location: req.body.loc,
        Email: req.body.mail,
        Password: req.body.pass,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// route.post("/login",
// body('mail',"Please enter a valid email").isEmail() ,
// body('pass', "Password Must be minimum of 6 Characters").isLength({min:2}),

// (req,res)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({ success:false, errors: errors.array() });
//     }
//     try {
//         user.findOne({
//             Email:req.body.mail
//         }).then((userData)=>{
//             if(!userData){
//                 return res.status(400).json({ success:false, errors:"Try Logging in with correct Email" });
//             }else{
//                 return userData;
//             }
//         }).then((userData)=>{
//             if(req.body.pass !== userData.Password){
//                 return res.status(400).json({success:false, errors:"Try Logging in with correct Password" });
//             }else{
//                 return res.json({success:true });
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

route.post(
  "/login",
  body("mail", "Please enter a valid email").isEmail(),
  body("pass", "Password Must be minimum of 6 Characters").isLength({ min: 2 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
      user.findOne({ Email: req.body.mail }).then((userData) => {
        if (!userData) {
          return res
            .status(400)
            .json({
              success: false,
              errors: "Try Logging in with correct Email",
            });
        } else if (req.body.pass !== userData.Password) {
          return res
            .status(400)
            .json({
              success: false,
              errors: "Try Logging in with correct Password",
            });
        } else {
          return res.json({ success: true });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = route;
