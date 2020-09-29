var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

    /*READ */
    router.post('/productos', productController.listaProductos);
    
    //CREATE
    router.get('/crearProducto', productController.crearProducto);
    
    //DELETE
    router.post('/eliminarproducto/:productoId', productController.eliminarProducto);
    
    //UPDATE
    router.post('/actualizarProducto/:prodctoId', productController.actualizarProducto);


module.exports =  router;
