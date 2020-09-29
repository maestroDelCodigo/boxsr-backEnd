
const connection = require('../../config/db');
let sha1 = require('sha1');

exports.listaProductos = (req, res) => {

    let sql = `SELECT * FROM producto`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

exports.crearProducto = (req, res) => {

   // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.send('producto creado')
    // })
}


exports.eliminarProducto = (req, res) => {
   let producto_id = req.params.producto_id;
    let sql = `DELETE FROM producto WHERE producto_id = ${producto_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto eliminado')
    })

}



exports.actualizarProducto = (req, res) => {
//     let producto_id = req.params.producto_id;
//     const { nombre_producto, tipo, peso, stock, activo, fecha_creacion, coleccion_id } = req.body;
//    // let image_product = req.file.filename;
//     let codigo_producto = sha1(req.body.codigo_producto)
//     let sql = `UPDATE producto SET nombre='${nombre}',tipo_producto='${tipo_producto}',
//     peso='${peso}',stock='${stock}',activo='${activo}'fecha_creacion='${fecha_creacion}', coleccion_id='${coleccion_id}'
//      WHERE producto_id=${producto_id}`;

//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('producto actualizado');

}




