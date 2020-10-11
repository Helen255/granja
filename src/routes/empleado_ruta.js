const express = require('express');
var router = express.Router();
const empleadoControlador = require('../controllers/empleado_controlador');

router.route('/')
    .get(empleadoControlador.list)
    .post(empleadoControlador.create)

router.route('/:empleadoId')
    .put(empleadoControlador.update)

router.route('/:empleadoId')
    .delete(empleadoControlador.delete)

router.route('/:empleadoId')
.get(empleadoControlador.findById);
    

module.exports = router;
