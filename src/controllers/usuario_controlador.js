const Usuario = require('../models/Usuario');


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

exports.delete = (req, res) => {
    Usuario.removeId(req.params.usuarioId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Usuario eliminado!` });
    });
};




