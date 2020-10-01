const express = require('express');
var router = express.Router();
const proveedorControlador=require('../controllers/proveedor_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(proveedorControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
