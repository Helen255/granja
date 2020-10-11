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

//Petición Get
exports.list = (req, res) => {
    Fase.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Fase.findById(req.params.faseId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Fase.updateId(
        req.params.faseId,
        new Fase(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    Fase.removeId(req.params.faseId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Fase eliminada!`});
    });
};







