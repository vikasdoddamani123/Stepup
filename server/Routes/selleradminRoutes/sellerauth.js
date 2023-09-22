const express = require ("express");
const router = express.Router();
const selletadminController = require('../../Controller/adminsellerController/adminsellerController');






router.get("/",selletadminController.admin_index);
router.post("/",selletadminController.admin_login_validate);




module.exports= router;


