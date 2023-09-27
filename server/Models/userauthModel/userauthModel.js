const mongoose = require("mongoose")

const useradminSchema = new mongoose.Schema({
    FirstName :  {
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
    Confirmpassword : {
        type : String,
    }
});

module.exports = mongoose.model("Useradmin", useradminSchema ,"Useradmins");