const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoproveedor_controlador');
   
router.route('/')
.get(datosControlador.proveedores)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:proveedorId')
.get(datosControlador.editar);

router.route('/actualizar/:proveedorId')
.post(datosControlador.actualizar);

router.route('/elimina/:proveedorId')
.get(datosControlador.elimina);

router.route('/eliminar/:proveedorId')
.post(datosControlador.eliminar);


module.exports = router;
