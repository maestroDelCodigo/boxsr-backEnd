

module.exports = (app) => {

    const productos = require('../controllers/productos.controller.js');

    /*READ */
    app.post('/productos', productos.listaProductos);
    
    //CREATE
    app.get('/crearProducto', productos.crearProducto);
    
    //DELETE
    app.delete('/eliminarproducto/:productoId', productos.eliminarProducto);
    
    //UPDATE
    app.put('/actualizarProducto/:prodctoId', productos.actualizarProducto);
}


