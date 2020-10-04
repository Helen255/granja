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

//Petición Get
Producto.getList = result => {
    conexion.query("SELECT * FROM producto", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("producto:", res);
        result(null, res);
    });
};

//Petición Put
Producto.updateById = (id, productoActu, result) => {
    const query = "UPDATE producto SET codigo = ?, precio = ?, stock = ?, activo = ?, categoria_id = ? WHERE id = ?";
    conexion.query(query, [productoActu.codigo, productoActu.precio, productoActu.stock, productoActu.activo, productoActu.categoria_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateById, ...productoActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}


//Petición Delete
Producto.removeId = (id, result) => {
    conexion.query("DELETE FROM producto WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Producto id eliminada: ", id);
        result(null, res);
    });
};

module.exports = Producto;