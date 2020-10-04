/*const express = require('express');
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

//peticiones post
router.post('/motivoGasto', (req, res) => {
    const { id, tipo_gasto } = req.body;
    const query = ` 
    CALL motivoGastos(?, ?);
    `;
    mysqlConnection.query(query, [id, tipo_gasto], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Tipo gasto guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones de actualización
router.put('/motivoGasto/:id', (req, res) => {
    const { tipo_gasto} = req.body;
    const { id } = req.params;
    const query= 'CALL motivoGastos(?, ?)';
    mysqlConnection.query(query, [id, tipo_gasto], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Motivo gasto actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones de eliminación
router.delete('/motivoGasto/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM motivo_gasto WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Motivo gasto eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;*/