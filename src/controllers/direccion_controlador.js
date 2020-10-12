const Cliente = require('../models/Cliente');
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

//Petición Get
exports.list = (req, res) => {
    Direccion.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Direccion.findById(req.params.direccionId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

exports.update = (req, res) => {
    Direccion.updateId(
        req.params.direccionId,
        new Direccion(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

exports.delete = (req, res) => {
    Direccion.removeId(req.params.direccionId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Dirección eliminada!`});
    });
};







