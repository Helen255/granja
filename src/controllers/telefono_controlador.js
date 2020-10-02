const Telefono = require('../models/Telefono');


exports.create = (req, res) => {
    const telefono = new Telefono({
        id: 0,
        telefono: req.body.telefono,
        empleado_id: req.body.empleado_id,
        cliente_id: req.body.cliente_id,
        proveedores_id: req.body.proveedores_id
    });

    Telefono.crear(telefono, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}




