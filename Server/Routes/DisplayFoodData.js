const express = require("express");
const route = express.Router();
const {food_data , food_categories} = require("./FoodDataProcess")
route.get("/foodData" , (req,res)=>{
    res.send([global.food_data , global.food_category])
})
// const foodData = FoodDataModel;


module.exports = route;