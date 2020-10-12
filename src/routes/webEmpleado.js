const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoEmpleado_controlador');
   
router.route('/')
.get(datosControlador.empleados)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:empleadoId')
.get(datosControlador.editar);

router.route('/actualizar/:empleadoId')
.post(datosControlador.actualizar);

router.route('/elimina/:empleadoId')
.get(datosControlador.elimina);

router.route('/eliminar/:empleadoId')
.post(datosControlador.eliminar);


module.exports = router;
