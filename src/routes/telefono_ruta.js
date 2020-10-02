const express = require('express');
var router = express.Router();
const telefonoControlador=require('../controllers/telefono_controlador');

router
.route('/')
//.get(categoriaControlador.lista)
.post(telefonoControlador.create);

 /*router.route('/:songId')
    .get(songController.show)
    .patch(songController.update)
    .delete(songController.destroy);*/


module.exports = router;
