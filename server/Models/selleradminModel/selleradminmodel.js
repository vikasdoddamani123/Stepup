const mongoose = require("mongoose")

const selleradminSchema = new mongoose.Schema({
    firstName :  {
        type:String,
    }, 
    MiddleName : {
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

module.exports = mongoose.model("Selleradmin", selleradminSchema ,"Selleradmins");