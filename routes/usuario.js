var express = require('express');
var router = express.Router();
const validaciones = require('../utils/userValidation');

const usuarioController = require('../controllers/usuarioController');
    
    router.post('/login', validaciones.loginUsuario, usuarioController.login);

    // Create a new user
    router.post('/crearUsuario', validaciones.crearUsuario, usuarioController.crearUsuario);

    //Retrieve all user
    router.get('/', usuarioController.lista);

    router.get('/:usuarioId', usuarioController.buscarUsuario);

    router.post('/desactivarUsuario', usuarioController.desactivarUsuario);
    
    // Update a user with userId
    router.post('/:usuarioId', validaciones.modificarUsuario, usuarioController.modificar);

    // Delete a user with usereId
    // // router.delete('/:usuarioId', usuarioController.borrar);
    // router.patch('/:usuarioId', usuarioController.borrar);
    
    module.exports= router;