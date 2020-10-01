const { query } = require('express');
const conexion = require('../db');

const Compra = function (compra) {
    this.id = compra.id;
    this.descripcion = compra.descripcion;
    this.cantidad = compra.cantidad;
    this.precio = compra.precio;
    this.fecha_compra = compra.fecha_compra;
    this.total = compra.total;
    this.producto_id = compra.producto_id;
}

Compra.crear = (nuevaCompra, result) => {
    const query = ` 
    CALL compras(?, ?, ?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevaCompra.id, nuevaCompra.descripcion, nuevaCompra.cantidad, nuevaCompra.precio, nuevaCompra.fecha_compra, nuevaCompra.total, nuevaCompra.producto_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevaCompra })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Compra;