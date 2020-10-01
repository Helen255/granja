const express = require('express');
var router = express.Router();
const motivoGastoControlador=require('../controllers/motivo_gasto_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(motivoGastoControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
