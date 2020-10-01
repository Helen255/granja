const Direccion = require('../models/Direccion');


exports.create = (req, res) => {
    const direccion = new Direccion({
        id: 0,
        direccion: req.body.direccion,
        cliente_id: req.body.cliente_id,
        empleado_id: req.body.empleado_id
    });

    Direccion.crear(direccion, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}








