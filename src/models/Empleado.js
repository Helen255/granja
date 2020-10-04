const { query } = require('express');
const conexion = require('../db');

const Empleado = function (empleado) {
    this.id = empleado.id;
    this.dpi = empleado.dpi;
    this.puesto = empleado.puesto;
    this.nombre = empleado.nombre; 
    this.usuario_id = empleado.usuario_id
}

Empleado.crear = (nuevoEmpleado, result) => {
    const query = ` 
    CALL empleados(?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoEmpleado.id, nuevoEmpleado.dpi, nuevoEmpleado.puesto, nuevoEmpleado.nombre, nuevoEmpleado.usuario_id], (err, rows, fields) => {
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

//Petición Get
Empleado.getList = result => {
    conexion.query("SELECT * FROM empleado", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("empleado:", res);
        result(null, res);
    });
};

//Petición Put
Empleado.updateId = (id, empleadoActu, result) => {
    const query = "UPDATE empleado SET nombre = ?, dpi = ?, puesto = ?, usuario_id = ? WHERE id = ?"
    conexion.query(query, [empleadoActu.nombre, empleadoActu.dpi, empleadoActu.puesto, empleadoActu.usuario_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateId, ...empleadoActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Empleado.removeId = (id, result) => {
    conexion.query("DELETE FROM empleado WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Empleado id eliminado: ", id);
        result(null, res);
    });
};


module.exports = Empleado;