var express = require('express');
var router = express.Router();


    const coleccionController = require('../controllers/coleccionController');

    // Create a new coleccion
    router.post('/colecciones', coleccionController.crear);

    //Retrieve all colecction
    router.get('/colecciones', coleccionController.lista);

    router.get('/colecciones/:coleccionId', coleccionController.buscarColeccion);
    
    // Update a user with coleccionId
    router.post('/colecciones/:coleccionId', coleccionController.modificar);

    // Delete a user with coleccionId
    router.post('/colecciones/:coleccionId', coleccionController.borrar);


    module.exports= router;