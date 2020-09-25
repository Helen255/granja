const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/direcciones',(req, res) => {
    mysqlConnection.query('SELECT * FROM direccion', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

module.exports = router;