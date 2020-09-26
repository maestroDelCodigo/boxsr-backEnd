module.exports = (app) => {
    const usuarios = require('../controllers/usuario.controller.js');

    // Create a new user
    app.post('/usuarios', usuarios.crear);

    //Retrieve all user
    app.get('/usuarios', usuarios.lista);

    app.get('/usuarios/:usuarioId', usuarios.buscarUsuario);
    
    // Update a user with userId
    app.put('/usuarios/:usuarioId', usuarios.modificar);

    // Delete a user with usereId
    app.delete('/usuarios/:usuarioId', usuarios.borrar);
}