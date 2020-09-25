const express = require('express');
const mysqlConnection = require('../database');
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

module.exports = router;
