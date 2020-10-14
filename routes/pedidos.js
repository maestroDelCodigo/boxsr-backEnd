var express = require('express');
var router = express.Router();


const pedidosController = require('../controllers/pedidosController')
 
    router.post('/crearPedido', pedidosController.crearPedido);

    router.get('/', pedidosController.listaPedidos);

    router.get('/buscarPedido/:id', pedidosController.buscarPedido);
    
    router.post('/modificarPedido/:id', pedidosController.modificarPedido);

    router.get('/obtenerCantidad/:id', pedidosController.obtenerCantidad);

    router.get('/obtenerResumen/:id', pedidosController.obtenerResumen);
    
    // router.post('/eliminarPedido/:id', pedidosController.eliminarPedido);

    module.exports= router;