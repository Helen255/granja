const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/motivoGasto',(req, res) => {
    mysqlConnection.query('SELECT * FROM motivo_gasto', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

module.exports = router;