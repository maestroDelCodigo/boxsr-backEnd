var express = require('express');
var router = express.Router();


const adminController = require ('../controllers/categoriaController')

    // Listado de administradores de la pagina
    router.get('/', adminController.listaAdmin);

    // Crear un nuevo administrador
    router.post('/crearAdmin', adminController.crearAdmin);

    // router.get('/buscarCategoria/:id', adminController.buscarCategoria);
    
    // Modificar un administrador
    router.post('/modificarAdmin/:id', adminController.modificarAdmin);

    // router.post('/borrarCategoria/:id', categoriaController.borrarCategoria);
    
    module.exports= router;