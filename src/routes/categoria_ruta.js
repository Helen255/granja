const express = require('express');
var router = express.Router();
const categoriaControlador=require('../controllers/categoria_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(categoriaControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;