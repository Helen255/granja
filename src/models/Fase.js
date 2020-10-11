const { query } = require('express');
const conexion = require('../db');

//Metodo constructor
const Fase = function (fase) {
    this.id = fase.id;
    this.numero_fase = fase.numero_fase;
}

//petición post
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

//Petición Get
Fase.getList = result => {
    conexion.query("SELECT * FROM fases", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("fase:", res);
        result(null, res);
    });
};

//petición get por id
Fase.findById = (faseId, result) => {
    conexion.query(`SELECT * FROM fase WHERE id = ${faseId}`, (err, res) => {
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
Fase.updateId = (id, faseActu, result) => {
    const query = "UPDATE fases SET numero_fase = ? WHERE id = ?"
    conexion.query(query, [faseActu.numero_fase, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...faseActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Fase.removeId = (id, result) => {
    conexion.query("DELETE FROM fases WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Fase id eliminada: ", id);
        result(null, res);
    });
};

module.exports = Fase;