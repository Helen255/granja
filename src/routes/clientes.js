const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/clientes',(req, res) => {
    mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/clientes', (req, res) => {
    const { id, nombre, empresa } = req.body;
    const query = ` 
    CALL consumoAves(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, nombre, empresa], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Cliente guardado'});
        }else {
            console.log(err);
        }


    });
});


module.exports = router;