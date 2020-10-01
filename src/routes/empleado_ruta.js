const express = require('express');
var router = express.Router();
const empleadoControlador=require('../controllers/empleado_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(empleadoControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
