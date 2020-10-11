const Producto = require('../models/Producto');
const Proveedor = require('../models/Proveedor');

//petición post
exports.create = (req, res) => {
    const proveedor = new Proveedor({
        id: 0,
        nombre: req.body.nombre,
        empresa: req.body.empresa,
        compras_id: req.body.compras_id
    });

    Proveedor.crear(proveedor, (err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
}


//Petición Get
exports.list = (req, res) => {
    Proveedor.getList((err, data) => {
        if (err)
            console.log(err);
        else res.send(data);
    });
};

//petición get por id
exports.findById = (req, res) => {
    Proveedor.findById(req.params.proveedorId, (err, data) => {
      if (err) {
      } else res.send(data);
    });
};

//petición update
exports.update = (req, res) => {
    Proveedor.updateById(
        req.params.proveedorId,
        new Proveedor(req.body),
        (err, data) => {
            if (err)
                console.log(err);
            else res.send(data);

        }
    );

};

//petición delete
exports.delete = (req, res) => {
    Proveedor.removeId(req.params.proveedorId, (err, data) => {
        if (err) {
            console.log(err);
        }else res.send({ message: `Proveeedor eliminado!`});
    });
};







