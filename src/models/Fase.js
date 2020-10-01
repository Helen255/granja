const { query } = require('express');
const conexion = require('../db');

const Fase = function (fase) {
    this.id = fase.id;
    this.numero_fase = fase.numero_fase;
}

Fase.crear = (nuevaFase, result) => {
    const query = ` 
    CALL fases(?, ?);
    `;
    conexion.query(query, [nuevaFase.id, nuevaFase.numero_fase], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevaFase })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Fase;