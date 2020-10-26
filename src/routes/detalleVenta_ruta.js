const express = require('express');
var router = express.Router();
const detalleVentaControlador = require('../controllers/detalleVenta_controlador');

router.route('/')
.get(detalleVentaControlador.list)
.post(detalleVentaControlador.create)

router.route('/:detalleVentaId')
.put(detalleVentaControlador.update)

router.route('/:detalleVentaId')
.delete(detalleVentaControlador.delete)

router.route('/:detalleVentaId')
.get(detalleVentaControlador.findById);

module.exports = router;