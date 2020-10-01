const Producto = require('../models/Producto');

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








