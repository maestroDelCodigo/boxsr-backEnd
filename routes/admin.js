var express = require("express");
var router = express.Router();
let verify = require("../config/verify");

const adminController = require("../controllers/adminController");

// Listado de administradores de la pagina ACTIVOS
router.get("/listaAdminActivos", adminController.listaAdminActivos);

// Listado de administradores de la pagina INACTIVOS
router.get("/listaAdminInactivos", adminController.listaAdminInactivos);

router.get("/unAdmin/:usuario_id", adminController.unAdmin)

// Crear un nuevo administrador
router.post("/crearAdmin", adminController.crearAdmin);

// Modificar un administrador
router.post("/modificarAdmin/:usuario_id", adminController.modificarAdmin);

// Ventas mensuales
router.get("/ventasMensuales", adminController.ventasMensuales);

// Ventas diarias
router.get("/ventasDiarias", adminController.ventasDiarias);

//Ver sugerencias
router.get('/verSugerencias/:id',adminController.verSugerencias);

module.exports = router;
