const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datoCategoria_controlador');
   
router.route('/')
.get(datosControlador.categorias)
.post(datosControlador.crear)
//obtener formulario categoria post
router.route('/recibir')
.get(datosControlador.obtener)

router.route('/editar/:categoriaId')
.get(datosControlador.editar);

router.route('/actualizar/:categoriaId')
.post(datosControlador.actualizar);

router.route('/elimina/:categoriaId')
.get(datosControlador.elimina);

router.route('/eliminar/:categoriaId')
.post(datosControlador.eliminar);


module.exports = router;
