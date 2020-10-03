const Cliente = require('../models/Cliente');


exports.create = (req, res) => {
    const cliente = new Cliente({
        id: 0,
        nombre: req.body.nombre,
        empresa: req.body.empresa
    });

    Cliente.crear(cliente, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}

//Petición Get
exports.list = (req, res) => {
    Cliente.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};


exports.update = (req, res) => {
    Cliente.updateId(
        req.params.clienteId,
        new Cliente(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

exports.delete = (req, res) => {
    Cliente.removeId(req.params.clienteId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Cliente eliminado!` });
    });
};