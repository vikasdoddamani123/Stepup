const express = require ("express");
const router = express.Router();
const adminController = require('../../Controller/adminController/authController');




// router.get("/",);
// router.post("/",adminController.adminpost);
router.get("/",adminController.admin_index);
router.post("/",adminController.admin_login_validate);


module.exports= router;