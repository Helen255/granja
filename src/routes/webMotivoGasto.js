const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoMotivoGasto_controlador');
   
router.route('/')
.get(datosControlador.motivoGastos)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:motivoGastoId')
.get(datosControlador.editar);

router.route('/actualizar/:motivoGastoId')
.post(datosControlador.actualizar);

router.route('/elimina/:motivoGastoId')
.get(datosControlador.elimina);

router.route('/eliminar/:motivoGastoId')
.post(datosControlador.eliminar);


module.exports = router;
