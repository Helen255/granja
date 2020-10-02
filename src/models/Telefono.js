const { query } = require('express');
const conexion = require('../db');

const Telefono = function (telefono) {
    this.id = telefono.id;
    this.telefono = telefono.telefono;
    this.empleado_id = telefono.empleado_id;
    this.cliente_id = telefono.cliente_id;
    this.proveedores_id = telefono.proveedores_id
}

Telefono.crear = (nuevoTelefono, result) => {
    const query = ` 
    CALL telefonos(?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoTelefono.id, nuevoTelefono.telefono, nuevoTelefono.empleado_id, nuevoTelefono.cliente_id, nuevoTelefono.proveedores_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoTelefono })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Telefono;