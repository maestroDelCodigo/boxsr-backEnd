let connection = require('../config/db.js')
let sha1 = require('sha1');
const { response } = require('../app.js');
const { validationResult } = require('express-validator');

usuarioController = {};


usuarioController.crear=(req,res)=>{
      
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }    

    let usuario_id = req.body.usuario_id
    let nombre = req.body.nombre
    let apellidos = req.body.apellidos
    let email = req.body.email
    let fecha_creacion = req.body.fecha_creacion
    let registrado = req.body.registrado
    let suscriptor = req.body.suscriptor
    let password = req.body.password
    let rol = req.body.rol
    let deleted = req.body.deleted
    let fecha_nacimiento = req.body.fecha_nacimiento


    if (!fecha_creacion){
        fecha_creacion = Date.now();
    } 

    if (!registrado){
        registrado = 1;
    } 
    
    if (!deleted){
        deleted = 0;
    }    

    let sql = `INSERT INTO usuario(usuario_id, nombre, apellidos, email,fecha_creacion, registrado, suscriptor, password, rol, deleted,fecha_nacimiento) VALUES ('${usuario_id}','${nombre}', '${apellidos}','${email}', '${fecha_creacion}', '${registrado}', '${suscriptor}', '${password}', '${rol}', '${deleted}', '${fecha_nacimiento}')`;

    connection.query(sql, (err, result) => {
        
        if (err) {
            res.status(500).send({
                message:  err.message//"Error al insertar en base de datos"
            });
        }        
        //envio un json como respuesta
        res.json(result);
    })
};

usuarioController.lista=(req,res)=>{

    let sql = `SELECT * FROM usuario where deleted <> 1`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }        
        //envio un json como respuesta
        res.json(result);
    })    
};

usuarioController.buscarUsuario=(req,res)=>{
    
    let sql = `SELECT * from usuario where usuario_id = ${req.params.usuarioId} and deleted <> 1`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }        
        //envio un json como respuesta
        res.json(result);
    });  
};

usuarioController.modificar=(req,res)=>{

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }    

    let usuario_id = req.params.usuarioId
    let nombre = req.body.nombre
    let apellidos = req.body.apellidos
    let email = req.body.email
    let fecha_creacion = req.body.fecha_creacion
    let registrado = req.body.registrado
    let suscriptor = req.body.suscriptor
    let password = req.body.password
    let rol = req.body.rol
    let deleted = req.body.deleted
    let fecha_nacimiento = req.body.fecha_nacimiento

    let sql = `UPDATE usuario SET nombre = '${nombre}', apellidos = '${apellidos}', email = '${email}' ,fecha_creacion = '${fecha_creacion}', registrado ='${registrado}', suscriptor = '${suscriptor}' , password = '${password}', rol ='${rol}' , deleted = '${deleted}' ,fecha_nacimiento = '${fecha_nacimiento}'
    WHERE usuario_id = ${usuario_id} and deleted <> 1`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }        
        //envio un json como respuesta
        res.json(result);
    })    

};

usuarioController.borrar=(req,res)=>{

    let idUsuario = req.params.usuarioId;

    // let sql = `DELETE FROM usuario WHERE usuario_id = ${idUsuario}`;
    
    // connection.query(sql, (err, result) => {
    //     if (err) {
    //         res.status(500).send({
    //             message: err.message
    //         });
    //     }        
    //     //envio un json como respuesta
    //     res.json(result);
    // });  
    let deleted = 1;

    let sql = `UPDATE usuario SET deleted = '${deleted}'  WHERE usuario_id = ${idUsuario}`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }        
        //envio un json como respuesta
        res.json(result);
    })    
}

usuarioController.login=(req,res)=>{

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }    

    let email = req.body.email;
    let password = req.body.password

    let sql = `SELECT * from usuario where email = '${email}' and password = '${password}' and deleted <> 1`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }        
        //envio un json como respuesta
        res.json(result);
    }) 
}   
module.exports = usuarioController;