const Proveedor = require('../models/Proveedor');


exports.create = (req, res) => {
    const proveedor = new Proveedor({
        id: 0,
        nombre: req.body.nombre,
        empresa: req.body.empresa,
        compras_id: req.body.compras_id
    });

    Proveedor.crear(proveedor, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}








