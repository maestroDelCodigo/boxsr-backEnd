const connection = require('../config/db');
const { app } = require('../app.js');

checkoutController = {};

checkoutController.submitPayment = (req, res) => {
  console.log(req.charge);
  res.json('success');
}

checkoutController.buscarUsuario = (req, res) => {
  let usuario_id = req.params.usuario_id
  let sql = `SELECT * from usuario JOIN direccion on usuario.usuario_id = direccion.usuario_id WHERE usuario.usuario_id =${usuario_id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.json(result[0]);
  });
};

module.exports = checkoutController;