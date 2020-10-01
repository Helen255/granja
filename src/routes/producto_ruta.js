const express = require('express');
var router = express.Router();
const productoControlador=require('../controllers/producto_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(productoControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
