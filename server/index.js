require ("dotenv").config();
const express = require ("express");
const cors = require ("cors");
const connection = require("./db");




const admincontroller = require("./Controller/adminController/authController")
const adminauthRoutes = require("./Routes/adminRoutes/adminauth")
const sellerRoutes = require("./Routes/sellerRoutes/sellerRoutes")
//seller
const selleradminRoutes = require("./Routes/selleradminRoutes/sellerauth")
const adminsellerController = require("./Controller/adminsellerController/adminsellerController")
const sellerproductRoute = require("./Routes/productsRoutes/sellerproductRoutes")

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
adminsellerController.adminpost();

// app.use('/uploads', express.static('uploads'));
// routes
 app.use("/api/adminauth",adminauthRoutes);
 app.use("/api/seller", sellerRoutes);
 //seller
 app.use("/api/selleradmin", selleradminRoutes)
 app.use("/api/products",sellerproductRoute )
 
app.use('/public/images', express.static('public/images'));




app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));