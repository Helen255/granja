const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/',(req, res) => {
    mysqlConnection.query('SELECT * FROM consumo_aves', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});


module.exports = router;