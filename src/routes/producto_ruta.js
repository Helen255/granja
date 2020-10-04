const express = require('express');
var router = express.Router();
const productoControlador=require('../controllers/producto_controlador');

router.route('/')
.get(productoControlador.list)
.post(productoControlador.create)

router.route('/:productoId')
.put(productoControlador.update)

router.route('/:productoId')
.delete(productoControlador.delete)


module.exports = router;
