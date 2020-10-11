const express = require('express');
var router = express.Router();
const proveedorControlador=require('../controllers/proveedor_controlador');

router.route('/')
.get(proveedorControlador.list)
.post(proveedorControlador.create)

router.route('/:proveedorId')
.put(proveedorControlador.update)

router.route('/:proveedorId')
.delete(proveedorControlador.delete)

router.route('/:proveedorId')
.get(proveedorControlador.findById);



module.exports = router;
