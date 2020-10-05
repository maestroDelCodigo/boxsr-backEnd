const connection = require("../config/db");

adminController = {};

// Crear un nuevo administrador
adminController.crearAdmin = (req, res) => {
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let password = req.body.password;
  let rol = req.body.rol;

  let sql = `INSERT INTO categoria (nombre) VALUE ('${nombre}','${apellidos}','${email}','${password}','${rol}')`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);    
  });
};

// Mostrar toda la lista de administradores
adminController.listaAdmin = (req, res) => {
  let sql = `SELECT * FROM usuario WHERE rol = 1`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// Modificar un administrador
adminController.modificarAdmin = (req, res) => {
  let usuario_id = req.params.id;
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let password = req.body.password;
  let rol = req.body.rol;
  let deleted = req.body.deleted;

  let sql = `UPDATE usuario SET nombre ='${nombre}', apellidos='${apellidos}', email='${email}',password='${password}',rol='${rol}', deleted='${deleted}' 
  WHERE usuario_id =${usuario_id} AND rol = 1`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// Ventas mensuales
adminController.ventasMensuales = (req, res) => {
  var date = new Date();
  var fechaMensual =
    date.getFullYear() + "-" + parseInt(date.getMonth() + 1) + "%";

  let sql = `SELECT total_pedido FROM pedido WHERE estado_pago = 'pagado' AND 
fecha_pedido LIKE '${fechaMensual}'  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// Ventas diarias
adminController.ventasDiarias = (req, res) => {
  var date = new Date();
  var fechaDiaria =
    date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    0 +
    date.getDate() +
    "%";
    
  let sql = `SELECT total_pedido FROM pedido WHERE estado_pago = 'pagado' AND 
fecha_pedido LIKE '${fechaDiaria}'  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = adminController;
