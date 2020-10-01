let connection = require('../config/db.js')
let sha1 = require('sha1');

descuentoController = {};



// Crear el descuento
descuentoController.crearDescuento=(req,res)=>{
    const {nombre, cantidad, fecha_creacion, fecha_inicio, fecha_fin} = req.body;
    let sql = `INSERT INTO users (nombre, cantidad, fecha_creacion, fecha_inicio, fecha_fin) VALUES ('${nombre}','${cantidad}','${fecha_creacion}','${fecha_inicio}','${fecha_fin}')`

    connection.query(sql,(err, result)=>{
        if(err)throw err;
        res.json(result)
    })

    res.send('ok');
};

// Mostrar todos los descuentos
descuentoController.listaDescuento=(req,res)=>{

    let sql = `SELECT * FROM descuento WHERE deleted = 0`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
 
    res.send('ok');
};

// Modificar un descuento
descuentoController.modificarDescuento=(req,res)=>{

    let descuento_id = req.params.descuento_id;

    const {nombre, cantidad, fecha_creacion, fecha_inicio, fecha_fin} = req.body;

    let sql = `INSERT INTO users (nombre, cantidad, fecha_creacion, fecha_inicio, fecha_fin) 
    VALUES ('${nombre}','${cantidad}','${fecha_creacion}','${fecha_inicio}','${fecha_fin}')
    WHERE descuento_id = '${descuento_id}'`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })

};

// Activar o desactivar un descuento
descuentoController.desactivarDescuento=(req,res)=>{
    let descuento_id =req.params.id;
    let inactivarDescuento = req.body.deleted;
        if (inactivarColeccion == false){
            let sql = `UPDATE  coleccion  SET deleted = 0
            WHERE descuento_id=' ${descuento_id}'`
            connection.query(sql, (err, result) => {
                  if (err) throw err;
        res.send('Descuento activo');
            }) 
        }
        else{
            let sql = `UPDATE  coleccion  SET deleted = 1
          WHERE descuento_id= '${descuento_id}'`
          connection.query(sql, (err, result) => {
            if (err) throw err;
        res.send('Descuento inactivo');
            })
        }
    


// //Eliminar un producto definitivamente ESTE CONTROLADOR NO SE VA A USAR
// descuentoController.borrarDescuento=(req, res)=>{
//     let descuento_id = req.params.descuento_id;

//     let sql = `DELETE FROM descuento WHERE descuento_id = ${descuento_id}`;
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Descuento eliminado');
//     })

//     res.send('Delete phone');
// };


module.exports = descuentoController;