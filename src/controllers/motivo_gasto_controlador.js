const MotivoGasto = require('../models/MotivoGasto');


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

exports.list = (req, res) => {
    MotivoGasto.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};


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

exports.delete = (req, res) => {
    MotivoGasto.removeId(req.params.motivoGastoId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `MotivoGasto eliminado!` });
    });
};








