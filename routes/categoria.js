var express = require('express');
var router = express.Router();


const categoriaController = require ('../controllers/categoriaController')

    // Create a new user
    router.post('/categoria', categoriaController.crearCategoria);

    //Retrieve all user
    router.get('/categoria', categoriaController.listaCategorias);

    router.get('/categoria/:categoriaId', categoriaController.buscarCategoria);
    
    // Update a user with userId
    router.post('/categoria/:categoriaId', categoriaController.modificarCategoria);

    // Delete a user with usereId
    router.post('/categoria/:categoriaId', categoriaController.borrarCategoria);
    
    module.exports= router;