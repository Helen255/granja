const MotivoGasto = require('../models/MotivoGasto');

//petición post
exports.create = (req, res) => {
    const motivoGasto = new MotivoGasto({
        id: 0,
        tipo_gasto: req.body.tipo_gasto
    });

    MotivoGasto.crear(motivoGasto, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}

//petiición get
exports.list = (req, res) => {
    MotivoGasto.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    MotivoGasto.findById(req.params.motivoGastoId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    MotivoGasto.updateId(
        req.params.motivoGastoId,
        new MotivoGasto(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    MotivoGasto.removeId(req.params.motivoGastoId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `MotivoGasto eliminado!` });
    });
};








