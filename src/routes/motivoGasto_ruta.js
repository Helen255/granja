const express = require('express');
var router = express.Router();
const motivoGastoControlador=require('../controllers/motivo_gasto_controlador');

router.route('/')
.get(motivoGastoControlador.list)
.post(motivoGastoControlador.create)

router.route('/:motivoGastoId')
.put(motivoGastoControlador.update)

router.route('/:motivoGastoId')
.delete(motivoGastoControlador.delete)

router.route('/:motivoGastoId')
.get(motivoGastoControlador.findById);


module.exports = router;
