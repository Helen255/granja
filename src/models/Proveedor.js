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


//Petición Get
Proveedor.getList = result => {
    conexion.query("SELECT * FROM proveedores", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("proveedor:", res);
        result(null, res);
    });
};

//Petición Put
Proveedor.updateById = (id, proveedorActu, result) => {
    const query = "UPDATE proveedores SET nombre = ?, empresa = ?, compras_id = ? WHERE id = ?";
    conexion.query(query, [proveedorActu.nombre, proveedorActu.empresa, proveedorActu.compras_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...proveedorActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Proveedor.removeId = (id, result) => {
    conexion.query("DELETE FROM proveedores WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Proveedor id eliminado: ", id);
        result(null, res);
    });
};

module.exports = Proveedor;