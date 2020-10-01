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