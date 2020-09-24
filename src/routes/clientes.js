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