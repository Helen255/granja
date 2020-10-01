const { query } = require('express');
const conexion = require('../db');

const Categoria = function (categoria) {
    this.id = categoria.id;
    this.nombre = categoria.nombre;
    this.descripcion = categoria.descripcion;
}

Categoria.crear = (nuevaCategoria, result) => {
    const query = ` 
    CALL categorias(?, ?, ?);
    `;
    conexion.query(query, [nuevaCategoria.id, nuevaCategoria.nombre, nuevaCategoria.descripcion], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevaCategoria })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Categoria;