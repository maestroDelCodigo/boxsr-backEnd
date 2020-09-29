module.exports = (app) => {
    const categoria = require('../controllers/categoria.controller.js');

    // Create a new user
    app.post('/categoria', categoria.crearCategoria);

    //Retrieve all user
    app.get('/categoria', categoria.listaCategorias);

    app.get('/categoria/:categoriaId', categoria.buscarcategoria);
    
    // Update a user with userId
    app.put('/categoria/:categoriaId', categoria.modificarCategoria);

    // Delete a user with usereId
    app.delete('/categoria/:categoriaId', categoria.borrarCategoria);
    
}