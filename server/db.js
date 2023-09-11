require ("dotenv").config();
const mongoose = require("mongoose");
module.exports= () => 
{
    return mongoose
    .connect (process .env .MONGODB_URL)
    .then (
        ()=> 
        console.log("connected to database")   )
    .catch(
        (err) => {
            this.console.error ("sorry.. could not connect to the database plese check your connection");
            throw err;
        }
    );
 
};