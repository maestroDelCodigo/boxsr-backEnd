const connection = require('../config/db');

const restarStock = async (req, res, next) => {
  req.body.items.forEach(element => {
    const sql = `UPDATE producto SET stock = stock -${element.cantidad} WHERE producto_id = ${element.producto_id}`;

    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
  next();
};


module.exports = restarStock;

