module.exports = (app) => {
    const usuarios = require('../controllers/usuario.controller.js');

    // Create a new Note
    app.post('/usuarios', usuarios.crear);

    //Retrieve all Notes
    app.get('/usuarios', usuarios.lista);

    // // Retrieve a single Note with noteId
    // app.get('/usuarios/:usuarioId', usuarios.buscarUsuario);

    // // Update a Note with noteId
    // app.put('/usuarios/:usuarioId', usuarios.modificar);

    // // Delete a Note with noteId
    // app.delete('/usuarios/:usuarioId', usuarios.borrar);
}