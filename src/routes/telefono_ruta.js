const express = require('express');
var router = express.Router();
const telefonoControlador=require('../controllers/telefono_controlador');

router.route('/')
.get(telefonoControlador.list)
.post(telefonoControlador.create)

router.route('/:telefonoId')
.put(telefonoControlador.update)

router.route('/:telefonoId')
.delete(telefonoControlador.delete)

router.route('/:telefonoId')
.get(telefonoControlador.findById);



module.exports = router;
