var express = require('express');
var router = express.Router();
const validaciones = require('../utils/userValidation');

const usuarioController = require('../controllers/usuarioController');
    
    router.post('/login', validaciones.loginUsuario, usuarioController.login);

    // Create a new user
    router.post('/crearUsuario', validaciones.crearUsuario, usuarioController.crearUsuario);

    //Retrieve all user
    router.get('/listaUsuarios', usuarioController.lista);

    router.get('/buscarUsuario/:usuario_id', usuarioController.buscarUsuario);
    // Desactivar usuario
    router.post('/desactivarUsuario', usuarioController.desactivarUsuario);
    
    // Update a user with userId
    router.post('/modificarUsuario/:usuario_id', usuarioController.modificarUsuario);

    // Delete a user with usereId
    // // router.delete('/:usuarioId', usuarioController.borrar);
    // router.patch('/:usuarioId', usuarioController.borrar);
    
    module.exports= router;