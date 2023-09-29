const mongoose = require("mongoose")


const sellerSchema = new mongoose.Schema({
    firstName :  {
        type:String,
    }, 
    lastName :  {
        type:String,
    }, 
    PhoneNumber :  {
        type:Number,
    }, 
    email :  {
        type:String,
    }, 
    address1 :  {
        type:String,
    }, 
    address2 :  {
        type:String,
    }, 
    landMark :  {
        type:String,
    }, 
    state :  {
        type:String,
    }, 
    city :  {
        type:String,
    }, 
    pinCode :  {
        type:Number,
    }, 
    country :  {
        type:String,
    }, 
    outletName :  {
        type:String,
    },
    adharNumber :  {
        data: {
            type: Buffer,
        
          },
          contentType: {
            type: String,
        
          },
          path: {
            type: String
          }
    },
    pancard :  {
        data: {
            type: Buffer,
        
          },
          contentType: {
            type: String,
        
          },
          path: {
            type: String
          }
    },
    
    GST_Number :{
        type:String,
    },
    registeredCopy : {
        data: {
            type: Buffer,
        
          },
          contentType: {
            type: String,
        
          },
          path: {
            type: String
          }
    },
    password : {
        type:String,
    },
    confirmPassword : {
        type:String,
    },

    sellerId: {
        type : String,
    },
});

 

module.exports = mongoose.model("Seller", sellerSchema ,"Sellers");