const express = require('express');
var router = express.Router();
const usuarioControlador=require('../controllers/usuario_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(usuarioControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
