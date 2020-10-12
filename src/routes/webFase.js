const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoFase_controlador');
   
router.route('/')
.get(datosControlador.fases)
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:faseId')
.get(datosControlador.editar);

router.route('/actualizar/:faseId')
.post(datosControlador.actualizar);

router.route('/elimina/:faseId')
.get(datosControlador.elimina);

router.route('/eliminar/:faseId')
.post(datosControlador.eliminar);


module.exports = router;
