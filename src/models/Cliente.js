const { query } = require('express');
const conexion = require('../db');

const Cliente = function (cliente) {
    this.id = cliente.id;
    this.nombre = cliente.nombre;
    this.empresa = cliente.empresa;
}

Cliente.crear = (nuevoCliente, result) => {
    const query = ` 
    CALL clientes(?, ?, ?);
    `;
    conexion.query(query, [nuevoCliente.id, nuevoCliente.nombre, nuevoCliente.empresa], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoCliente })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Cliente;