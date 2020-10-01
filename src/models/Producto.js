const { query } = require('express');
const conexion = require('../db');

const Producto = function (producto) {
    this.id = producto.id;
    this.codigo = producto.codigo;
    this.precio = producto.precio;
    this.stock = producto.stock;
    this.activo = producto.activo;
    this.categoria_id = producto.categoria_id;
}

Producto.crear = (nuevoProducto, result) => {
    const query = ` 
    CALL productos(?, ?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoProducto.id, nuevoProducto.codigo, nuevoProducto.precio, nuevoProducto.stock, nuevoProducto.activo, nuevoProducto.categoria_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoProducto })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Producto;