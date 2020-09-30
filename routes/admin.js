var express = require('express');
var router = express.Router();


const categoriaController = require ('../controllers/categoriaController')

    
    router.get('/', categoriaController.listaCategorias);

    router.post('/crearCategoria', categoriaController.crearCategoria);

    router.get('/buscarCategoria/:id', categoriaController.buscarCategoria);
    
    router.post('/modificarCategoria/:id', categoriaController.modificarCategoria);

    // router.post('/borrarCategoria/:id', categoriaController.borrarCategoria);
    
    module.exports= router;