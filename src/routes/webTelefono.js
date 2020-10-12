const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoTelefono_controlador');
   
router.route('/')
.get(datosControlador.telefonos)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:telefonoId')
.get(datosControlador.editar);

router.route('/actualizar/:telefonoId')
.post(datosControlador.actualizar);

router.route('/elimina/:telefonoId')
.get(datosControlador.elimina);

router.route('/eliminar/:telefonoId')
.post(datosControlador.eliminar);


module.exports = router;
