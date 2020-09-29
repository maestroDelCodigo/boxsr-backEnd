var express = require('express');
var router = express.Router();


const pedidosController = require('../controllers/pedidosController')
 
    router.post('/pedidos', pedidosController.crearPedido);

   
    router.get('/pedidos', pedidosController.listaPedidos);

    router.get('/pedidos/:pedidoId', pedidosController.buscarPedido);
    
    router.post('/usuarios/:pedidoId', pedidosController.modificarPedido);

    router.get('/pedidos/estadoPedido', pedidosController.estadoPedido);
    

    router.post('/usuarios/:pedidoId', pedidosController.eliminarPedido);

    module.exports= router;