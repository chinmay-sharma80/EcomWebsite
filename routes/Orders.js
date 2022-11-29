const express = require("express");
const router = express.Router()

const orderController = require('../controllers/Orders');

router.get("/", orderController.getAllOrders);

router.post("/", orderController.newOrder);

router.put("/",orderController.putOrder);

router.delete("/", orderController.deleteOrder);

module.exports = router;
