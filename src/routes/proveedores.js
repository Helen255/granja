const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/proveedores',(req, res) => {
    mysqlConnection.query('SELECT * FROM proveedores', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/proveedores', (req, res) => {
    const { id, nombre, empresa, compra_aves_id, consumo_aves_id } = req.body;
    const query = ` 
    CALL proveedores(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id,nombre, empresa, compra_aves_id, consumo_aves_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Proveedor guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/proveedores/:id', (req, res) => {
    const {nombre, empresa, compra_aves_id, consumo_aves_id} = req.body;
    const { id } = req.params;
    const query= 'CALL proveedores(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, nombre, empresa, compra_aves_id, consumo_aves_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Proveedor  actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/proveedores/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM proveedores WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Proveedor eliminado'});
        }else {
            console.log(err);
        }
    });
});


module.exports = router;
