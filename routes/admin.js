var express = require('express');
var router = express.Router();
let verify = require('../config/verify')

const adminController = require ('../controllers/adminController')

    // // Listado de administradores de la pagina
    // router.get('/', adminController.listaAdmin);

    // // Crear un nuevo administrador
    // router.post('/crearAdmin', adminController.crearAdmin);
    
    // // Modificar un administrador
    // router.post('/modificarAdmin/:id', adminController.modificarAdmin);


    // Ventas mensuales
    router.get('/ventasMensuales', adminController.ventasMensuales);

    router.get('/ventasDiarias', adminController.ventasDiarias)

    // // Ventas diarias
    // router.get('/ventasDiarias',  adminController.ventasDiarias);
    
    module.exports= router;