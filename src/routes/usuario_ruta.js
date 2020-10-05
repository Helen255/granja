const express = require('express');
var router = express.Router();
const usuarioControlador=require('../controllers/usuario_controlador');

router.route('/')
.get(usuarioControlador.list)
.post(usuarioControlador.create)

router.route('/:usuarioId')
.put(usuarioControlador.update)

router.route('/:usuarioId')
.delete(usuarioControlador.delete)


module.exports = router;
