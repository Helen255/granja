const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/telefonos',(req, res) => {
    mysqlConnection.query('SELECT * FROM telefono', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/telefonos', (req, res) => {
    const { id, telefono, empleado_id, cliente_id, proveedores_id} = req.body;
    const query = ` 
    CALL telefonos(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, telefono, empleado_id, cliente_id, proveedores_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Telefono guardado'});
        }else {
            console.log(err);
        }


    });
});


router.put('/telefonos/:id', (req, res) => {
    const {telefono, empleado_id, cliente_id, proveedores_id} = req.body;
    const { id } = req.params;
    const query= 'CALL telefonos(?, ?, ?, ?. ?)';
    mysqlConnection.query(query, [id, telefono, empleado_id, cliente_id, proveedores_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Telefono  actualizado'});
        }else {
            console.log(err);
        }
    });
 });
module.exports = router;