const express = require ("express");
const router = express.Router();
const sellerController = require('../../Controller/sellerController/sellerController');





router.get("/", sellerController.seller_index);
router.post("/", sellerController.seller_create_post);
router.get("/:id", sellerController.seller_details);
router.patch("/:id", sellerController.seller_update);
router.delete("/:id", sellerController.seller_delete);


module.exports = router;