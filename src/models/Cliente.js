const { query } = require('express');
const conexion = require('../db');

//metodo constructor
const Cliente = function (cliente) {
    this.id = cliente.id;
    this.nombre = cliente.nombre;
    this.empresa = cliente.empresa;
}

//petición post
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

//Petición Get
Cliente.getList = result => {
    conexion.query("SELECT * FROM cliente", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("cliente:", res);
        result(null, res);
    });
};

//petición get por id
Cliente.findById = (clienteId, result) => {
    conexion.query(`SELECT * FROM cliente WHERE id = ${clienteId}`, (err, res) => {
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
Cliente.updateId = (id, clienteActu, result) => {
    const query ="UPDATE cliente SET nombre = ?, empresa = ? WHERE id = ?";
    conexion.query(query, [clienteActu.nombre, clienteActu.empresa, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...clienteActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Cliente.removeId = (id, result) => {
    conexion.query("DELETE FROM cliente WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Cliente id eliminado: ", id);
        result(null, res);
    });
};

module.exports = Cliente;