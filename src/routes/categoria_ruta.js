const express = require('express');
var router = express.Router();
const categoriaControlador = require('../controllers/categoria_controlador');

router.route('/')
.get(categoriaControlador.list)
.post(categoriaControlador.create)

router.route('/:categoriaId')
.put(categoriaControlador.update)

router.route('/:categoriaId')
.delete(categoriaControlador.delete)

router.route('/:categoriaId')
.get(categoriaControlador.findById);

module.exports = router;