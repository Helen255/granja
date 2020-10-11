const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoCliente_controlador');
   
router.route('/')
.get(datosControlador.clientes)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:clienteId')
.get(datosControlador.editar);

router.route('/actualizar/:clienteId')
.post(datosControlador.actualizar);

router.route('/elimina/:clienteId')
.get(datosControlador.elimina);

router.route('/eliminar/:clienteId')
.post(datosControlador.eliminar);


module.exports = router;
