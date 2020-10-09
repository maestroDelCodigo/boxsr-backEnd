var express = require('express');
var router = express.Router();

const sugerenciaController = require('../controllers/sugerenciaController');

    
   router.post('/crearSugerencia', sugerenciaController.crearSugerencia);

module.exports =  router;
