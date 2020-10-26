const DetalleVenta = require('../models/DetalleVenta');

exports.create = (req, res) => {
    const detalleVenta = new DetalleVenta({
        id: 0,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        subtotal: req.body.subtotal,
        venta_id: req.body.venta_id,
        producto_id: req.body.producto_id,
    });

    DetalleVenta.crear(detalleVenta, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}


//Petición Get
exports.list = (req, res) => {
    DetalleVenta.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};


//petición get por id
exports.findById = (req, res) => {
    DetalleVenta.findById(req.params.detalleVentaId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

exports.update = (req, res) => {
    DetalleVenta.updateById(
        req.params.detalleVentaId,
        new DetalleVenta(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

exports.delete = (req, res) => {
    DetalleVenta.removeId(req.params.detalleVentaId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Detalle venta eliminada!`});
    });
};
