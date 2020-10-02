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