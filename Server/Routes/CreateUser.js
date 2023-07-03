//Note: Thesea are all the dependencies we used in the file
const express = require("express");
const route = express.Router();
const user = require("../Models/UserModel"); //Schema Fetched
const { body, validationResult } = require("express-validator"); //body validator fetched
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()

//Note: Login Route
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
    bcrypt
      .genSalt(12)
      .then((salt) => {
        return bcrypt.hash(req.body.pass, salt);
      })
      .then((hashPass) => {
        user
          .create({
            Name: req.body.name,
            Location: req.body.loc,
            Email: req.body.mail,
            Password: hashPass,
          })
          .then(() => {
            res.json({ success: true });
          }).catch((error) => {
            console.log(error);
            res.json({ success: false });
          });
      });
  }
);



//Note: Signup Route
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
          return res.status(400).json({
            success: false,
            errors: "Try Logging in with correct Email",
          });
        } 
        bcrypt.compare(req.body.pass, userData.Password).then((result)=>{
            if (!result) {
                return res.status(400).json({
                  success: false,
                  errors: "Try Logging in with correct Password",
                });
              } else {
                //to use as authentication for a user that it is authenticated or not
                const data = {
                    user: {
                        id: userData.id
                    }
                }
                const authTocken = jwt.sign(data , process.env.SECRET_KEY_FOR_JWT)
                return res.json({ success: true , authTocken:authTocken});
              }
        })
            
      });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = route;
