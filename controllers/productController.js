
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
let codigo_barras=req.body.codigo_barras;
let peso=req.body.peso;
let stock= req.body.stock;
let deleted=req.body.deleted;
let fecha_creacion=req.body.fecha_creacion;



    let sql = `INSERT INTO producto (nombre,tipo_producto,codigo_barras,peso,stock,deleted,fecha_creacion) 
    VALUES ('${nombre}','${tipo_producto}', '${codigo_barras}',
    '${peso}','${stock}','${deleted}' ,'${fecha_creacion}')`;



   connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto creado')
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
    let producto = req.body.producto;
    if (producto == false){
        let sql = `UPDATE  producto  SET deleted = 0,
        WHERE producto_id= ${producto_id}`;
    } else{
        let sql = `UPDATE  descuento  SET deleted = 1,
      WHERE producto_id= ${producto_id}`;
    }
    res.send('Producto descatalogado');
 
 }



productController.actualizarProducto = (req, res) => {

    let producto_id = req.params.id;

    let nombre=req.body.nombre;
    let tipo_producto=req.body.tipo_producto;
    let codigo_barras=req.body.codigo_barras;
    let peso=req.body.peso;
    let stock= req.body.stock;
    let deleted=req.body.deleted;
    let fecha_creacion=req.body.fecha_creacion;
   
    let sql = `UPDATE producto SET nombre='${nombre}', tipo_producto='${tipo_producto}',
     codigo_barras='${codigo_barras}', peso='${peso}',stock='${stock}',deleted=${deleted}, fecha_creacion='${fecha_creacion}' WHERE producto_id=${producto_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto actualizado');

})
}


module.exports = productController;