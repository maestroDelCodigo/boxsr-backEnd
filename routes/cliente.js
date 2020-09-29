var express = require('express');
var router = express.Router();


const clienteController = require ('../controllers/clienteController');

    // Create a new client
    router.post('/clientes', clienteController.crear);

    //Retrieve all client
    router.get('/clientes', clienteController.lista);

    router.get('/clientes/:clienteId', clienteController.buscarCliente);
    
    // Update a user with clientId
    router.post('/clientes/:clienteId', clienteController.modificar);

    // Delete a user with clientId
    router.post('/clientes/:clienteId', clienteController.borrar);

    
    module.exports= router;