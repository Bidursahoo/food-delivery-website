const FoodDataModel = require("../Models/FoodDataModel");
const FoodCategoryModel = require("../Models/FoodCategoryModel")

FoodDataModel.find({}).then((data)=>{
    global.food_data = data;

});


FoodCategoryModel.find({}).then((data)=>{
    global.food_category = data;
})


