var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

    /*READ */
    router.get('/', productController.listaProductos);
    
    //CREATE
    router.post('/crearProducto', productController.crearProducto);
    
    //DELETE
    // router.post('/eliminarProducto/:id', productController.eliminarProducto);

    //DESCATALOGAR
    router.post('/descatalogarProducto/:id', productController.descatalogarProducto)
    
    //UPDATE
    router.post('/actualizarProducto/:id', productController.actualizarProducto);


module.exports =  router;
