const express = require('express');
var router = express.Router();
const clienteControlador=require('../controllers/cliente_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(clienteControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
