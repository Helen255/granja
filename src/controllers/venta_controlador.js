const Venta = require('../models/Venta');

exports.create = (req, res) => {
    const venta = new Venta({
        id: 0,
        total: req.body.total,
        fecha_venta: req.body.fecha_venta,
        usuario_id: req.body.usuario_id,
        cliente_id: req.body.cliente_id
    });

    Venta.crear(venta, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}


//Petición Get
exports.list = (req, res) => {
    Venta.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};


//petición get por id
exports.findById = (req, res) => {
    Venta.findById(req.params.ventaId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

exports.update = (req, res) => {
    Venta.updateById(
        req.params.ventaId,
        new Venta(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

exports.delete = (req, res) => {
    Venta.removeId(req.params.ventaId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Venta eliminada!`});
    });
};
