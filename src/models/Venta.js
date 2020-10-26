const { query } = require('express');
const conexion = require('../db');

//Metodo constructor
const Venta = function (venta) {
    this.id = venta.id;
    this.total = venta.total;
    this.fecha_venta = venta.fecha_venta;
    this.usuario_id = venta.usuario_id;
    this.cliente_id = venta.cliente_id
}

Venta.crear = (nuevaVenta, result) => {
    const query = ` 
    CALL ventas(?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevaVenta.id, nuevaVenta.total, nuevaVenta.fecha_venta, nuevaVenta.usuario_id, nuevaVenta.cliente_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevaVenta })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Get
Venta.getList = result => {
    conexion.query("SELECT * FROM venta", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("venta:", res);
        result(null, res);
    });
};


//petición get por id
Venta.findById = (ventaId, result) => {
    conexion.query(`SELECT * FROM venta WHERE id = ${ventaId}`, (err, res) => {
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
Venta.updateById = (id, ventaActu, result) => {
    const query = "UPDATE venta SET total = ?, fecha_venta = ?, usuario_id = ?, cliente_id = ? WHERE id = ?";
    conexion.query(query, [ventaActu.total, ventaActu.fecha_venta, ventaActu.usuario_id, ventaActu.cliente_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateById, ...ventaActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
Venta.removeId = (id, result) => {
    conexion.query("DELETE FROM venta WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Venta id eliminada: ", id);
        result(null, res);
    });
};
module.exports = Venta;
