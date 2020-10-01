const { query } = require('express');
const conexion = require('../db');

const MotivoGasto = function (fase) {
    this.id = fase.id;
    this.tipo_gasto = fase.tipo_gasto;
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

module.exports = MotivoGasto;