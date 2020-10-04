var express = require('express');
var router = express.Router();


    const coleccionController = require('../controllers/coleccionController');

    router.get('/', coleccionController.listaColecciones);

    router.post('/crearColeccion', coleccionController.crearColeccion);

    router.get('/buscarColeccion/:id', coleccionController.buscarColeccion);
    
    router.post('/modificarColeccion/:id', coleccionController.modificarColeccion);

    router.post('/inactivarColeccion/:id',coleccionController.inactivarColeccion);

    router.get('/productos/:id', coleccionController.obtenerProductosAsociados);
   
    //router.post('/borrarColeccion/:id', coleccionController.borrarColeccion);


    module.exports= router;