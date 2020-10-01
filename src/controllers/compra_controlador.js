const Compra = require('../models/Compra');


exports.create = (req, res) => {
    const compra = new Compra({
        id: 0,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        fecha_compra: req.body.fecha_compra,
        total: req.body.total,
        producto_id: req.body.producto_id
    });

    Compra.crear(compra, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}








