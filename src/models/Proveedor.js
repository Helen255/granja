const { query } = require('express');
const conexion = require('../db');

const Proveedor = function (proveedor) {
    this.id = proveedor.id;
    this.nombre = proveedor.nombre;
    this.empresa = proveedor.empresa;
    this.compras_id = proveedor.compras_id
}

Proveedor.crear = (nuevoProveedor, result) => {
    const query = ` 
    CALL proveedor(?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoProveedor.id, nuevoProveedor.nombre, nuevoProveedor.empresa, nuevoProveedor.compras_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoProveedor })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Proveedor;