const express = require('express');
var router = express.Router();
const ventaControlador=require('../controllers/venta_controlador');

router.route('/')
.get(ventaControlador.list)
.post(ventaControlador.create)

router.route('/:ventaId')
.put(ventaControlador.update)

router.route('/:ventaId')
.delete(ventaControlador.delete)

router.route('/:ventaId')
.get(ventaControlador.findById);



module.exports = router;
