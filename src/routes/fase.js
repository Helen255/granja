const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/fase',(req, res) => {
    mysqlConnection.query('SELECT * FROM fases', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/fase', (req, res) => {
    const { id, numero_fase } = req.body;
    const query = ` 
    CALL fases(?, ?);
    `;
    mysqlConnection.query(query, [id, numero_fase], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Fase guardada'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones delete
router.delete('/fase/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM fases WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Fase eliminada'});
        }else {
            console.log(err);
        }
    });
});
module.exports = router;