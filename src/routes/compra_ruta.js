const express = require('express');
var router = express.Router();
const compraControlador=require('../controllers/compra_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(compraControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
