const Usuario = require('../models/Usuario');

//petición post
exports.create = (req, res) => {
    const usuario = new Usuario({
        id: 0,
        usuario: req.body.usuario,
        contrasenia: req.body.contrasenia
    });

    Usuario.crear(usuario, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}

//Petición Get
exports.list = (req, res) => {
    Usuario.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Usuario.findById(req.params.usuarioId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Usuario.updateId(
        req.params.usuarioId,
        new Usuario(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    Usuario.removeId(req.params.usuarioId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Usuario eliminado!` });
    });
};




