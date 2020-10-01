const express = require('express');
var router = express.Router();
const direccionControlador=require('../controllers/direccion_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(direccionControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
