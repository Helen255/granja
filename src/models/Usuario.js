const { query } = require('express');
const conexion = require('../db');

//metodo constructor
const Usuario = function (usuario) {
    this.id = usuario.id;
    this.usuario = usuario.usuario;
    this.contrasenia = usuario.contrasenia;
}

//petición post
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

//Petición Get
Usuario.getList = result => {
    conexion.query("SELECT * FROM usuario", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("usuario:", res);
        result(null, res);
    });
};

//petición get por id
Usuario.findById = (usuarioId, result) => {
    conexion.query(`SELECT * FROM usuario WHERE id = ${usuarioId}`, (err, res) => {
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
Usuario.updateId = (id, usuarioActu, result) => {
    const query = "UPDATE usuario SET usuario = ?, contrasenia = ? WHERE id = ?";
    conexion.query(query, [usuarioActu.usuario, usuarioActu.contrasenia, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...usuarioActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Usuario.removeId = (id, result) => {
    conexion.query("DELETE FROM usuario WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Usuario id eliminado: ", id);
        result(null, res);
    });
};

module.exports = Usuario;