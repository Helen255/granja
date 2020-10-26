const { query } = require('express');
const conexion = require('../db');

//Metodo constructor
const DetalleVenta = function (detalleVenta) {
    this.id = detalleVenta.id;
    this.precio = detalleVenta.precio;
    this.cantidad = detalleVenta.cantidad;
    this.subtotal = detalleVenta.subtotal;
    this.venta_id = detalleVenta.venta_id;
    this.producto_id = detalleVenta.producto_id;
}

DetalleVenta.crear = (nuevoDetalleVenta, result) => {
    const query = ` 
    CALL detalleVentas(?, ?, ?, ?, ?, ?);
    `;
    conexion.query(query, [nuevoDetalleVenta.id, nuevoDetalleVenta.precio, nuevoDetalleVenta.cantidad, nuevoDetalleVenta.subtotal, nuevoDetalleVenta.venta_id, nuevoDetalleVenta.producto_id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.insertId, ...nuevoDetalleVenta })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Get
DetalleVenta.getList = result => {
    conexion.query("SELECT * FROM detalle_venta", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("detalleVenta:", res);
        result(null, res);
    });
};


//petición get por id
DetalleVenta.findById = (detalleVentaId, result) => {
    conexion.query(`SELECT * FROM detalle_venta WHERE id = ${detalleVentaId}`, (err, res) => {
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
DetalleVenta.updateById = (id, detalleVentaActu, result) => {
    const query = "UPDATE detalle_venta SET precio = ?, cantidad = ?, subtotal = ?, venta_id = ?, producto_id = ? WHERE id = ?";
    conexion.query(query, [detalleVentaActu.precio, detalleVentaActu.cantidad, detalleVentaActu.subtotal, detalleVentaActu.venta_id, detalleVentaActu.producto_id, id], (err, rows, fields) => {
        if (!err) {
            result(null, { id: result.updateById, ...detalleVentaActu })
            return;
        } else {
            console.log(err);
            result(err, null)
            return;
        }

    });
}

//Petición Delete
DetalleVenta.removeId = (id, result) => {
    conexion.query("DELETE FROM detalle_venta WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Detalle Venta id eliminada: ", id);
        result(null, res);
    });
};
module.exports = DetalleVenta;
