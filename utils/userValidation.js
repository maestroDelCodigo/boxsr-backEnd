const { check } = require('express-validator');

exports.crearUsuario = [
    //check('usuario_id').notEmpty(),
    check('nombre').notEmpty(),
    check('apellidos').notEmpty(),
    check('email').notEmpty().isEmail(),    
    check('password').notEmpty(),
    //check('rol').notEmpty(), 
    //check('fecha_nacimiento').notEmpty()
];

exports.modificarUsuario = [  
    check('email').notEmpty().isEmail(),    
];

exports.loginUsuario = [
    check('email').notEmpty().isEmail(),
    check('password').notEmpty()
];