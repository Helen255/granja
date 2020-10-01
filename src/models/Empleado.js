const { query } = require('express');
const conexion = require('../db');

const Empleado = function (empleado) {
    this.id = empleado.id;
    this.nombre = empleado.nombre;
    this.dpi = empleado.dpi;
    this.puesto = empleado.puesto;
    this.usuario_id = empleado.usuario_id
}

Empleado.crear = (nuevoEmpleado, result) => {
    const query = ` 
    CALL empleados(?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoEmpleado.id, nuevoEmpleado.nombre, nuevoEmpleado.dpi, nuevoEmpleado.puesto, nuevoEmpleado.usuario_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoEmpleado })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

module.exports = Empleado;