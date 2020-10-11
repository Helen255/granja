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

//petición get por id
Categoria.findById = (categoriaId, result) => {
    conexion.query(`SELECT * FROM categoria WHERE id = ${categoriaId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }
    });
};

//Petición Put
Categoria.updateById = (id, categoriaActu, result) => {
    const query = "UPDATE categoria SET nombre = ?, descripcion = ? WHERE id = ?";
    conexion.query(query, [categoriaActu.nombre, categoriaActu.descripcion, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateById, ...categoriaActu })
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