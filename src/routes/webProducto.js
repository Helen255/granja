const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoproducto_controlador');
   
router.route('/')
.get(datosControlador.productos)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:productoId')
.get(datosControlador.editar);

router.route('/actualizar/:productoId')
.post(datosControlador.actualizar);

router.route('/elimina/:productoId')
.get(datosControlador.elimina);

router.route('/eliminar/:productoId')
.post(datosControlador.eliminar);


module.exports = router;
