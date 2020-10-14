const express = require("express");
const payment = require('../config/stripe');
const restarStock = require('../config/stock');

const checkoutController = require("../controllers/checkoutController");
const router = express.Router();

router.post('/', [payment, restarStock], checkoutController.submitPayment);

module.exports = router;

