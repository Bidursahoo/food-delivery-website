const mongoose = require("mongoose");

const {Schema} = mongoose;

const OrderSchema = new Schema({
    Email:{
        type: String,
        required:true
    },
    OrderData:{
        type:Array,
        required:true
    },
    OrderDate:{
        type:String
    }
})
module.exports = mongoose.model("order" , OrderSchema);