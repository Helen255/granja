const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoDireccion_controlador');
   
router.route('/')
.get(datosControlador.direcciones)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:direccionId')
.get(datosControlador.editar);

router.route('/actualizar/:direccionId')
.post(datosControlador.actualizar);

router.route('/elimina/:direccionId')
.get(datosControlador.elimina);

router.route('/eliminar/:direccionId')
.post(datosControlador.eliminar);


module.exports = router;
