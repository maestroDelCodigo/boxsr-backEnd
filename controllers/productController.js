
const connection = require('../config/db');
let sha1 = require('sha1');

productController = {};

productController.listaProductos = (req, res) => {

    let sql = `SELECT * FROM producto`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

productController.crearProducto = (req, res) => {

   connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto creado')
    })
}


productController.eliminarProducto = (req, res) => {
   let producto_id = req.params.producto_id;
    let sql = `DELETE FROM producto WHERE producto_id = ${producto_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto eliminado')
    })

}



productController.actualizarProducto = (req, res) => {
    let producto_id = req.params.producto_id;
    const { nombre_producto, tipo, codigo_barras,peso, stock, deleted, fecha_creacion} = req.body;
   
    let codigo_producto = sha1(req.body.codigo_producto)
    let sql = `UPDATE producto SET nombre_producto='${nombre_producto}',tipo='${tipo}', codigo_barras='${codigo_barras},
    peso='${peso}',stock='${stock}',deleted='${deleted}' ,fecha_creacion='${fecha_creacion}'
     WHERE producto_id=${producto_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('producto actualizado');

})
}


module.exports = productController;