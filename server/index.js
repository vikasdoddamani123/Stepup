require ("dotenv").config();

const express = require ("express");
const cors = require ("cors");
const connection = require("./db");




const admincontroller = require("./Controller/adminController/authController")
const adminauthRoutes = require("./Routes/adminRoutes/adminauth")

const app = express();
const PORT = process.env.PORT || 8080;



connection();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use((req,res, next) => {
    res.locals.path = req.path;
    next();
});



admincontroller.adminpost();

// routes
 app.use("/api/adminauth",adminauthRoutes);



app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));