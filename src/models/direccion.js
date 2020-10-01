const { query } = require('express');
const conexion = require('../db');

const Direccion = function (compra) {
    this.id = compra.id;
    this.direccion = compra.direccion;
    this.cliente_id = compra.cliente_id;
    this.empleado_id = compra.empleado_id;
}

Direccion.crear = (nuevaDireccion, result) => {
    const query = ` 
    CALL direcciones(?, ?, ?, ?);
    `;
    conexion.query(query, [nuevaDireccion.id, nuevaDireccion.direccion, nuevaDireccion.cliente_id, nuevaDireccion.empleado_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevaDireccion })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Direccion;