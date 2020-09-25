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

module.exports = router;