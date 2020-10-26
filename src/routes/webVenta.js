const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/venta_controlador');
   

router.route('/')
//.get(datosControlador.create)
//.post(datosControlador.create)

/*
router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:usuarioId')
.get(datosControlador.editar);

router.route('/actualizar/:usuarioId')
.post(datosControlador.actualizar);

router.route('/elimina/:usuarioId')
.get(datosControlador.elimina);

router.route('/eliminar/:usuarioId')
.post(datosControlador.eliminar);
*/

module.exports = router;
