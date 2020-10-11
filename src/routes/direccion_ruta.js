const express = require('express');
var router = express.Router();
const direccionControlador=require('../controllers/direccion_controlador');

router.route('/')
.get(direccionControlador.list)
.post(direccionControlador.create)

router.route('/:direccionId')
.put(direccionControlador.update)

router.route('/:direccionId')
.delete(direccionControlador.delete)

router.route('/:direccionId')
.get(direccionControlador.findById);


module.exports = router;
