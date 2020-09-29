var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')
    // Create a new user
    router.post('/usuarios', usuarioController.crear);

    //Retrieve all user
    router.get('/usuarios', usuarioController.lista);

    router.get('/usuarios/:usuarioId', usuarioController.buscarUsuario);
    
    // Update a user with userId
    router.post('/usuarios/:usuarioId', usuarioController.modificar);

    // Delete a user with usereId
    router.post('/usuarios/:usuarioId', usuarioController.borrar);
    
    module.exports= router;