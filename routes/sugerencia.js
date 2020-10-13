var express = require('express');
var router = express.Router();

const sugerenciaController = require('../controllers/sugerenciaController');

    
   router.post('/crearSugerencia', sugerenciaController.crearSugerencia);
  
   router.get('/verSugerencias', sugerenciaController.verSugerencias);

module.exports =  router;
