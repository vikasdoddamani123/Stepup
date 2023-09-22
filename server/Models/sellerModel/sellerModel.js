const mongoose = require("mongoose")


const sellerSchema = new mongoose.Schema({
    Name :  {
        type:String,
    }, 
    Email :  {
        type:String,
    },
    PhoneNumber :  {
        type:String,
    },
    Address :  {
        type:String,
    },
    OutletName : {
        type:String,
    },
    GST_Number :{
        type:String,
    }
});

module.exports = mongoose.model("Seller", sellerSchema ,"Sellers");