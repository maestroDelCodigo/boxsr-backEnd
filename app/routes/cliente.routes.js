module.exports = (app) => {
    const cliente = require('../controllers/cliente.controller.js');

    // Create a new client
    app.post('/clientes', cliente.crear);

    //Retrieve all client
    app.get('/clientes', cliente.lista);

    app.get('/clientes/:clienteId', cliente.buscarCliente);
    
    // Update a user with clientId
    app.put('/clientes/:clienteId', cliente.modificar);

    // Delete a user with clientId
    app.delete('/clientes/:clienteId', cliente.borrar);
}