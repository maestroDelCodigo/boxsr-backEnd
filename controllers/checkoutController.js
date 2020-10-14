const connection = require('../config/db');
const { app } = require('../app.js');

checkoutController = {};

checkoutController.submitPayment = (req, res) => {
  console.log(req.charge);
  res.json('success');
}

module.exports = checkoutController;