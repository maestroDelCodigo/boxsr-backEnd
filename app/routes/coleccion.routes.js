module.exports = (app) => {
    const coleccion = require('../controllers/coleccion.controller.js');

    // Create a new coleccion
    app.post('/colecciones', coleccion.crear);

    //Retrieve all colecction
    app.get('/colecciones', coleccion.lista);

    app.get('/colecciones/:coleccionId', coleccion.buscarColeccion);
    
    // Update a user with coleccionId
    app.put('/colecciones/:coleccionId', coleccion.modificar);

    // Delete a user with coleccionId
    app.delete('/colecciones/:coleccionId', coleccion.borrar);
}