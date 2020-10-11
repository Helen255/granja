const express = require('express');
var router = express.Router();
const faseControlador=require('../controllers/fase_controlador');

router.route('/')
.get(faseControlador.list)
.post(faseControlador.create)

router.route('/:faseId')
.put(faseControlador.update)

router.route('/:faseId')
.delete(faseControlador.delete)

router.route('/:faseId')
.get(faseControlador.findById);

module.exports = router;
