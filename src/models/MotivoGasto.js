const { query } = require('express');
const conexion = require('../db');

const MotivoGasto = function (motivoGasto) {
    this.id = motivoGasto.id;
    this.tipo_gasto = motivoGasto.tipo_gasto;
}

MotivoGasto.crear = (nuevoGasto, result) => {
    const query = ` 
    CALL motivoGastos(?, ?);
    `;
    conexion.query(query, [nuevoGasto.id, nuevoGasto.tipo_gasto], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoGasto })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Get
MotivoGasto.getList = result => {
    conexion.query("SELECT * FROM motivo_gasto", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("motivoGasto:", res);
        result(null, res);
    });
};

//Petición Put
MotivoGasto.updateId = (id, motivoGastoActu, result) => {
    const query = "UPDATE motivo_gasto SET tipo_gasto = ?  WHERE id = ?"
    conexion.query(query, [motivoGastoActu.tipo_gasto, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...motivoGastoActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}
//Petición Delete
MotivoGasto.removeId = (id, result) => {
    conexion.query("DELETE FROM motivo_gasto WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Gasto id eliminado: ", id);
        result(null, res);
    });
};
module.exports = MotivoGasto;