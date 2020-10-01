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








