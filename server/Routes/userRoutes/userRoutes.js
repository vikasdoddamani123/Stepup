const express = require ("express");
const router = express.Router();
const userController = require('../../Controller/userauthController/userauthController');




// router.get("/",);
// router.post("/",userController.user_index);
router.get("/",userController.user_index);
router.post("/",userController. user_create_post);
router.get("/:id",userController. user_details);


module.exports= router;