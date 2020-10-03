const express = require('express');
var router = express.Router();
const clienteControlador=require('../controllers/cliente_controlador');

router.route('/')
.get(clienteControlador.list)
.post(clienteControlador.create)

router.route('/:clienteId')
.put(clienteControlador.update)

router.route('/:clienteId')
.delete(clienteControlador.delete)


module.exports = router;
