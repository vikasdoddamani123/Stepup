const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    firstName :  {
        type:String,
    },
    Lastname :  {
        type:String,
    },
    key :  {
        type:String,
        unique : true,
    },
    password :  {
        type:String,
    },
});

module.exports = mongoose.model("Admin", adminSchema ,"Admins");