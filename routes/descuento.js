var express = require('express');
var router = express.Router();


const descuentoController = require ('../controllers/descuentoController')

    // Crear nuevo descuento
    router.post('/addDescuento', descuentoController.crearDescuento);

    //Ver la lista de descuentos
    router.get('/descuento', descuentoController.listaDescuento);

    // // Ver un descuento
    // router.get('/descuento/:descuentoId', descuentoController.buscarDescuento);
    
    // Actualizar un descuento
    router.post('/descuento/:descuento_id', descuentoController.modificarDescuento);

    // Borrar un descuento
    router.post('/descuento/:descuento_id', descuentoController.borrarDescuento);
    
    // Desactivar un descuento
    router.post('/descuento/:descuento_id', descuentoController.desactivarDescuento);

    module.exports= router;