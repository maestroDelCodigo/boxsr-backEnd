module.exports = (app) => {
    const pedidos = require('../controllers/pedidos.controller.js');

 
    app.post('/pedidos', pedidos.crear);

   
    app.get('/pedidos', pedidos.lista);

    app.get('/pedidos/:pedidoId', pedidos.buscarPedido);
    
    app.put('/usuarios/:pedidoId', pedidos.modificar);

    app.get('/pedidos/estadoPedido', pedidos.estadoPedido);
    

    app.delete('/usuarios/:pedidoId', pedidos.eliminar);
    
}