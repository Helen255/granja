const express = require('express');
var router = express.Router();
const faseControlador=require('../controllers/fase_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(faseControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
