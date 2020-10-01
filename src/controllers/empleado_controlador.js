const Empleado = require('../models/Empleado');


exports.create = (req, res) => {
    const empleado = new Empleado({
        id: 0,
        nombre: req.body. nombre,
        dpi: req.body.dpi,
        puesto: req.body.puesto,
        usuario_id: req.body.usuario_id
    });

 

    Empleado.crear(empleado, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}








