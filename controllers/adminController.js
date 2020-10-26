const connection = require("../config/db");

adminController = {};

// Crear un nuevo administrador
adminController.crearAdmin = (req, res) => {
  let date = new Date();
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let password = req.body.password;
  // let deleted = req.body.deleted;
  let rol = "Admin";
  let fecha_creacion = date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "%";

  let sql = `INSERT INTO usuario (nombre, apellidos, email, password, fecha_creacion, rol)
  VALUES ('${nombre}','${apellidos}','${email}','${password}', '${fecha_creacion}', '${rol}')`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);

  });
};

// Mostrar toda la lista de administradores activos
adminController.listaAdminActivos = (req, res) => {
  let sql = `SELECT * FROM usuario WHERE rol = 'Admin' AND deleted = 0`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
// Mostrar toda la lista de administradores inactivos
adminController.listaAdminInactivos = (req, res) => {
  let sql = `SELECT * FROM usuario WHERE rol = 'Admin' AND deleted = 1`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
// Modificar un administrador
adminController.modificarAdmin = (req, res) => {
  let usuario_id = req.params.usuario_id;
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let password = req.body.password;


  let sql = `UPDATE usuario SET nombre ='${nombre}', apellidos='${apellidos}', email='${email}',password='${password}' 
  WHERE usuario_id = ${usuario_id}`;

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
  console.log(fechaMensual)

  let sql = `SELECT total_pedido FROM pedido WHERE  
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

    date.getDate() +
    "%";

  let sql = `SELECT total_pedido FROM pedido WHERE
fecha_pedido LIKE '${fechaDiaria}'`;


  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

adminController.unAdmin = (req, res) => {
  let usuario_id = req.params.usuario_id
  let sql = `SELECT * FROM usuario WHERE usuario_id = ${usuario_id}`

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result)
  })
}
adminController.desactivarAdmin = (req, res) => {
  let usuario_id = req.params.id;
  let desactivarAdmin = req.body.deleted;
  if (desactivarAdmin == false) {
    let sql = `UPDATE  usuario  SET deleted = 0
            WHERE usuario_id=' ${usuario_id}'`
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json('Admin activo');
    })

  }
  else {
    let sql = `UPDATE  usuario  SET deleted = 1
          WHERE usuario_id= '${usuario_id}'`
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json('Admin inactivo');
    })

  }

}


module.exports = adminController;
