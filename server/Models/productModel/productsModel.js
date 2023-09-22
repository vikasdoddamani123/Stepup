const mongoose = require("mongoose")


const productsSchema = new mongoose.Schema({
    Image :  {
        type:String,
    }, 
    Product_Title :  {
        type:String,
    },
    Product_ID :  {
        type:String,
    },
    Product_Sales :  {
        type:String,
    },
    PrIce : {
        type:String,
    },
    registerPhoto:
    {
        data:
        {
            type:Buffer,
        },
        contentType:
        {
            type:String,
        },
        path:
        {
            type:String,
        }
    },
});

module.exports = mongoose.model("Product", productsSchema ,"Products");