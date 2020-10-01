const Fase = require('../models/Fase');


exports.create = (req, res) => {
    const fase = new Fase({
        id: 0,
        numero_fase: req.body.numero_fase
    });

    Fase.crear(fase, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}








