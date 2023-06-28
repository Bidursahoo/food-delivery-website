const mongoose = require("mongoose");

const {Schema} = mongoose;

const FoodDataSchema = new Schema({
    CategoryName:String,
    name:String,
    img:String,
    options:Array,
    description:String
})

module.exports = mongoose.model('food_items', FoodDataSchema);