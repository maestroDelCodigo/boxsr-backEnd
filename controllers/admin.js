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

    res.send("admin creado");
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
let fecha_pedido_incio = req.body.fecha_pedido_incio;
let fecha_pedido_fin = req.body.fecha_pedido_fin;

let sql = `SELECT total_pedido,SUM(total_pedido) as Suma_Mensual
FROM pedido
WHERE 
estado_pago = 'pagado' AND 
fecha_pedido BETWEEN fecha_pedido_inicio ='${fecha_pedido_incio}' AND fecha_pedido_fin ='${fecha_pedido_fin}'`

connection.query(sql,(err, result)=>{
  if(err)throw err;
  res.json(result)
})

// Ventas diarias
let fecha_pedido_incio = req.body.fecha_pedido_incio;
let fecha_pedido_fin = req.body.fecha_pedido_fin;

let registro = Date.now();
console.log(registro)

let sql = `SELECT total_pedido,SUM(total_pedido) as Suma_Mensual
FROM pedido
WHERE 
estado_pago = 'pagado' AND 
fecha_pedido BETWEEN fecha_pedido_inicio ='${fecha_pedido_incio}' 
AND fecha_pedido_fin ='${fecha_pedido_fin}'`

connection.query(sql,(err, result)=>{
  if(err)throw err;
  res.json(result)
})




// categoriaController.borrarUsuario=(req,res)=>{

//     let categoria_id = req.params.id;

//     let sql = `DELETE FROM categoria WHERE categoria_id = ${categoria_id}`;

//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Categoria borrada');
//     })
// };

module.exports = adminController;
