const Categoria = require('../models/Categoria');


exports.create = (req, res) => {
    const categoria = new Categoria({
        id: 0,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    Categoria.crear(categoria, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}
//Petición Get
exports.list = (req, res) => {
    Categoria.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};


exports.update = (req, res) => {
    Categoria.updateId(
        req.params.categoriaId,
        new Categoria(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

exports.delete = (req, res) => {
    Categoria.removeId(req.params.categoriaId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Categoria eliminada!`});
    });
};