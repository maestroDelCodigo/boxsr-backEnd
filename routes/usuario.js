var express = require('express');
var router = express.Router();
const validaciones = require('../utils/userValidation');

const usuarioController = require('../controllers/usuarioController');
    
    // Create a new user
    router.post('/', validaciones.crearUsuario, usuarioController.crear);

    //Retrieve all user
    router.get('/', usuarioController.lista);

    router.get('/:usuarioId', usuarioController.buscarUsuario);
    
    // Update a user with userId
    router.post('/:usuarioId', validaciones.modificarUsuario, usuarioController.modificar);

    // Delete a user with usereId
    // router.delete('/:usuarioId', usuarioController.borrar);
    router.patch('/:usuarioId', usuarioController.borrar);
    
    module.exports= router;