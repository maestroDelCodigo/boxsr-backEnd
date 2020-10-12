let connection = require("../config/db.js");
let sha1 = require("sha1");
const { response } = require("../app.js");
const { validationResult } = require("express-validator");

usuarioController = {};
// Crear un nuevo usuario
usuarioController.crearUsuario = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let date = new Date();
  let fecha_nacimiento1 = req.body.fecha_nacimiento;
  let fecha_nacimiento2 = Date.parse(fecha_nacimiento1);
  let date2 = new Date(fecha_nacimiento2);
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let password = req.body.password;
  let direccion = req.body.direccion;
  let codigo_postal = req.body.codigo_postal;
  let poblacion = req.body.poblacion;
  let provincia = req.body.provincia;
  let pais = "España";
  let deleted = 0;
  let fecha_nacimiento =
    date2.getFullYear() +
    "-" +
    parseInt(date2.getMonth() + 1) +
    "-" +
    0 +
    date2.getDate() +
    "%";
  // let deleted = req.body.deleted;
  let rol = "Usuario";
  let fecha_creacion =
    date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    0 +
    date.getDate() +
    "%";
  // Validacion de que el email existe o no en la BBDD
  let sql3 = `SELECT email FROM usuario WHERE email = '${email}'`;
  connection.query(sql3, (err, result3) => {
      if (err) throw err;
    if (result3.length > 0) {
        console.log(result3.length);
        res.status(409).json({ message: "Ese email ya existe" });
    }  
    else{
        console.log(" dentro del");
    let sql = `INSERT INTO usuario (nombre, apellidos, email, password, fecha_creacion, 
    fecha_nacimiento,  rol, deleted) VALUES ('${nombre}','${apellidos}','${email}','${password}', '${fecha_creacion}', 
    '${fecha_nacimiento}', '${rol}', ${deleted})`;
    connection.query(sql, (err, result4) => {
        console.log(result4);
        if (err) {
          res.status(500).json({
            message: "Fallo al registrar usuario",
          });
        }
        let sql2 = `INSERT INTO direccion (direccion, codigo_postal, poblacion,provincia , pais, usuario_id) 
    VALUES ('${direccion}', '${codigo_postal}', '${poblacion}', '${provincia}','${pais}','${result4.insertId}')`;
        connection.query(sql2, (err, result2) => {
          if (err) throw err;
          res.json(result2);
        });
      });
    }
  });
};

// Listar todos los usuarios
usuarioController.lista = (req, res) => {
  let sql = `SELECT * FROM usuario where deleted <> 1`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    }
    //envio un json como respuesta
    res.json(result);
  });
};

usuarioController.buscarUsuario = (req, res) => {
  let sql = `SELECT * from usuario where usuario_id = ${req.params.usuarioId} and deleted <> 1`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.json(result);
  });
};
// Modificar datos de un usuario
usuarioController.modificar = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let usuario_id = req.params.usuarioId;
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let email = req.body.email;
  let fecha_creacion = req.body.fecha_creacion;
  let registrado = req.body.registrado;
  let suscriptor = req.body.suscriptor;
  let password = req.body.password;
  let rol = req.body.rol;
  let deleted = req.body.deleted;
  let fecha_nacimiento = req.body.fecha_nacimiento;

  let sql = `UPDATE usuario SET nombre = '${nombre}', apellidos = '${apellidos}', email = '${email}' ,fecha_creacion = '${fecha_creacion}', registrado ='${registrado}', suscriptor = '${suscriptor}' , password = '${password}', rol ='${rol}' , deleted = '${deleted}' ,fecha_nacimiento = '${fecha_nacimiento}'
    WHERE usuario_id = ${usuario_id} and deleted <> 1`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    }
    //envio un json como respuesta
    res.json(result);
  });
};

// Activar o desactivar un usuario
usuarioController.desactivarUsuario = (req, res) => {
  let desactivarUsuario = req.body.desactivarUsuario;
  if (desactivarUsuario == false) {
    let sql = `UPDATE  usuario  SET deleted = 0,
            WHERE usuario_id= ${usuario_id}`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json("Usuario activo");
    });
  } else {
    let sql = `UPDATE  usuario  SET deleted = 1,
          WHERE usuario_id= ${usuario_id}`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json("Usuario inactivo");
    });
  }
};

// BORRAR NO SE VA A UTILIZAR POR EL MOMENTO
// usuarioController.borrar=(req,res)=>{

//     let idUsuario = req.params.usuarioId;

//     // let sql = `DELETE FROM usuario WHERE usuario_id = ${idUsuario}`;

//     // connection.query(sql, (err, result) => {
//     //     if (err) {
//     //         res.status(500).send({
//     //             message: err.message
//     //         });
//     //     }
//     //     //envio un json como respuesta
//     //     res.json(result);
//     // });
//     let deleted = 1;

//     let sql = `UPDATE usuario SET deleted = '${deleted}'  WHERE usuario_id = ${idUsuario}`;

//     connection.query(sql, (err, result) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message
//             });
//         }
//         //envio un json como respuesta
//         res.json(result);
//     })
// }

// Login de usuario
usuarioController.login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  let password = req.body.password;

  let sql = `SELECT * from usuario where email = '${email}' and password = '${password}' and deleted <> 1`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    }
    //envio un json como respuesta
    res.json(result[0]);
  });
};
module.exports = usuarioController;
