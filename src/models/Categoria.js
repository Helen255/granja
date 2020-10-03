const { query } = require('express');
const conexion = require('../db');

//Metodo constructor
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
//Petición Get
Categoria.getList = result => {
    conexion.query("SELECT * FROM categoria", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("categoria:", res);
        result(null, res);
    });
};

//Petición Put
Categoria.updateId = (id, categoriaActu, result) => {
    const query = ` 
    CALL categorias(?, ?, ?);
    `;
    conexion.query(query, [categoriaActu.nombre, categoriaActu.descripcion, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...categoriaActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Categoria.removeId = (id, result) => {
    conexion.query("DELETE FROM categoria WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Categoria id eliminada: ", id);
        result(null, res);
    });
};

module.exports = Categoria;