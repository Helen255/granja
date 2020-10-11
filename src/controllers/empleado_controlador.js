const Empleado = require('../models/Empleado');

//petición post
exports.create = (req, res) => {
    const empleado = new Empleado({
        id: 0,
        dpi: req.body.dpi,
        puesto: req.body.puesto,
        nombre: req.body.nombre,
        usuario_id: req.body.usuario_id
    });



    Empleado.crear(empleado, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}


//Petición Get
exports.list = (req, res) => {
    Empleado.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Empleado.findById(req.params.empleadoId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Empleado.updateId(
        req.params.empleadoId,
        new Empleado(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};
//petición delete
exports.delete = (req, res) => {
    Empleado.removeId(req.params.empleadoId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Empleado eliminado!` });
    });
};





