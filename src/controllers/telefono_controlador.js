const Telefono = require('../models/Telefono');

//petición post
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

//Petición Get
exports.list = (req, res) => {
    Telefono.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Telefono.findById(req.params.telefonoId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Telefono.updateById(
        req.params.telefonoId,
        new Telefono(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    Telefono.removeId(req.params.telefonoId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Telefono eliminada!` });
    });
};




