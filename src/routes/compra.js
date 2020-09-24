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
    const { id, descipcion, numero_aves, precio, fecha_compra, total } = req.body;
    const query = ` 
    CALL consumoAves(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, descipcion, numero_aves, precio, fecha_compra, total], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Compra guardada'});
        }else {
            console.log(err);
        }


    });
});

module.exports = router;