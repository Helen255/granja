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

//Petición Get
Telefono.getList = result => {
    conexion.query("SELECT * FROM telefono", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("telefono:", res);
        result(null, res);
    });
};

//Petición Put
Telefono.updateById = (id, telefonoActu, result) => {
    const query = "UPDATE telefono SET telefono = ?, empleado_id = ?, cliente_id = ?, proveedores_id = ? WHERE id = ?";
    conexion.query(query, [telefonoActu.telefono, telefonoActu.empleado_id, telefonoActu.cliente_id, telefonoActu.proveedores_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateById, ...telefonoActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Telefono.removeId = (id, result) => {
    conexion.query("DELETE FROM telefono WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Telefono id eliminado: ", id);
        result(null, res);
    });
};


module.exports = Telefono;