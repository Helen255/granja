const { query } = require('express');
const conexion = require('../db');

const Usuario = function (usuario) {
    this.id = usuario.id;
    this.usuario = usuario.usuario;
    this.contrasenia = usuario.contrasenia;
}

Usuario.crear = (nuevoUsuario, result) => {
    const query = ` 
    CALL usuarios(?, ?, ?);
    `;
    conexion.query(query, [nuevoUsuario.id, nuevoUsuario.usuario, nuevoUsuario.contrasenia], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoUsuario })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Usuario;