const { query } = require('express');
const conexion = require('../db');

const Direccion = function (direccion) {
    this.id = direccion.id;
    this.direccion = direccion.direccion;
    this.cliente_id = direccion.cliente_id;
    this.empleado_id = direccion.empleado_id;
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

//Petición Get
Direccion.getList = result => {
    conexion.query("SELECT * FROM direccion", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("dirección:", res);
        result(null, res);
    });
};

//Petición Put
Direccion.updateId = (id, direccionActu, result) => {
    const query = ` 
    CALL direcciones(?, ?, ?, ?);
    `;
    conexion.query(query, [direccionActu.direccion, direccionActu.cliente_id, direccionActu.empleado_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...direccionActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}


//Petición Delete
Direccion.removeId = (id, result) => {
    conexion.query("DELETE FROM direccion WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Dirección id eliminada: ", id);
        result(null, res);
    });
};

module.exports = Direccion;