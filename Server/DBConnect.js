const mongoose = require("mongoose")
const uri = "mongodb+srv://bidur123:bidur123@cluster0.iwalj7l.mongodb.net/FoodieMern?retryWrites=true&w=majority";
mongoose.connect(uri , {useNewUrlParser : false});
module.exports =  mongoose.connect(uri , {useNewUrlParser : false});