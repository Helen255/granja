const Producto = require('../models/Producto');

//petición post
exports.create = (req, res) => {
    const producto = new Producto({
        id: 0,
        codigo: req.body.codigo,
        precio: req.body.precio,
        stock: req.body.stock,
        activo: req.body.activo,
        categoria_id: req.body.categoria_id
    });

    Producto.crear(producto, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}

//Petición Get
exports.list = (req, res) => {
    Producto.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Producto.findById(req.params.productoId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Producto.updateById(
        req.params.productoId,
        new Producto(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    Producto.removeId(req.params.productoId, (err, data) => {
        if (err) {
            console.log(err);
        } else res.send({ message: `Producto eliminado!` });
    });
};







