const express = require ("express");
const router = express.Router();
const productcontroller = require('../../Controller/productsController/productsController');




router.get("/showproduct", productcontroller.product_display);
router.post("/", productcontroller.create_product);
router.get("/:id", productcontroller.show_product);
router.patch("/:id", productcontroller.update_product);
router.delete("/:id", productcontroller.delete_product);


module.exports = router;