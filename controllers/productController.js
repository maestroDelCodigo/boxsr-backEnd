
const connection = require('../config/db');


productController = {};

productController.listaProductos = (req, res) => {

    let sql = `SELECT * FROM producto`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

productController.crearProducto = (req, res) => {

let nombre=req.body.nombre;
let tipo_producto=req.body.tipo_producto;
let codigo_producto=req.body.codigo_producto;
let peso=req.body.peso;
let stock= req.body.stock;
let deleted=req.body.deleted;
let fecha_creacion=req.body.fecha_creacion;
let precio= req.body.precio;



    let sql = `INSERT INTO producto (nombre,tipo_producto,codigo_producto,peso,stock,deleted,fecha_creacion,precio) 
    VALUES ('${nombre}','${tipo_producto}', '${codigo_producto}',
    '${peso}','${stock}','${deleted}' ,'${fecha_creacion}',${precio})`;



   connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json('producto creado')
    })
}


// productController.eliminarProducto = (req, res) => {
//    let producto_id = req.params.id;
//     let sql = `DELETE FROM producto WHERE producto_id = ${producto_id}`;

//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('producto eliminado')
//     })

// }

productController.descatalogarProducto = (req, res) => {
    let producto_id=req.params.id;
    let descatalogarProducto = req.body.deleted;
        if (descatalogarProducto == false){
            let sql = `UPDATE  producto  SET deleted = 0
            WHERE producto_id=' ${producto_id}'`
            connection.query(sql, (err, result) => {
                  if (err) throw err;
        res.send('Producto activo');
            }) 
           
        }
        else{
            let sql = `UPDATE  producto  SET deleted = 1
          WHERE producto_id= '${producto_id}'`
          connection.query(sql, (err, result) => {
            if (err) throw err;
        res.send('Producto inactivo');
            })
           
        }
 
 }



productController.actualizarProducto = (req, res) => {

    let producto_id = req.params.id;

    let nombre=req.body.nombre;
    let tipo_producto=req.body.tipo_producto;
    let codigo_producto=req.body.codigo_producto;
    let peso=req.body.peso;
    let stock= req.body.stock;
    let deleted=req.body.deleted;
    // let fecha_creacion=req.body.fecha_creacion;
    let precio=req.body.precio;
   
    let sql = `UPDATE producto SET nombre='${nombre}', tipo_producto='${tipo_producto}',
    codigo_producto='${codigo_producto}', peso='${peso}',stock='${stock}',deleted=${deleted}, precio='${precio}' WHERE producto_id=${producto_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json('producto actualizado');

})
}


module.exports = productController;