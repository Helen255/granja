const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/detalle',(req, res) => {
    mysqlConnection.query('SELECT * FROM detalle_venta', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

module.exports = router;