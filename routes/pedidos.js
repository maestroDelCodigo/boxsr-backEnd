var express = require('express');
var router = express.Router();


const pedidosController = require('../controllers/pedidosController')
 
    router.post('/crearPedido', pedidosController.crearPedido);

    router.get('/', pedidosController.listaPedidos);

    router.get('/buscarPedido/:id', pedidosController.buscarPedido);
    
    router.post('/modificarPedido/:id', pedidosController.modificarPedido);

    router.get('/obtenerCantidad/:id', pedidosController.obtenerCantidad);

    router.get('/obtenerDetalle/:id', pedidosController.obtenerDetalle);

    router.get('/obtenerProductosPedido/:id', pedidosController.obtenerProductosPedido);
    
    // router.post('/eliminarPedido/:id', pedidosController.eliminarPedido);
    router.get('/listaPedidos', pedidosController.listaPedidos);

    router.get('/detallePedido/:id', pedidosController.detallePedido);



    router.post('/obtenerDetalle', pedidosController.obtenerDetalle);

    module.exports= router;