const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/compra',(req, res) => {
    mysqlConnection.query('SELECT * FROM compra_aves', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/compra', (req, res) => {
    const { id, descripcion, numero_aves, precio, fecha_compra, total } = req.body;
    const query = ` 
    CALL comprasAves(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, descripcion, numero_aves, precio, fecha_compra, total], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Compra guardada'});
        }else {
            console.log(err);
        }


    });
});

module.exports = router;