const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/consumo',(req, res) => {
    mysqlConnection.query('SELECT * FROM consumo_aves', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/consumo', (req, res) => {
    const { id, nombre, fase, precio, cantidad, total } = req.body;
    const query = ` 
    CALL consumoAves(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, nombre, fase, precio, cantidad, total], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Consumo guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones de actualización
router.put('/consumo/:id', (req, res) => {
   const {nombre, fase, precio, cantidad, total} = req.body;
   const { id } = req.params;
   const query= 'CALL consumoAves(?, ?, ?, ?, ?, ?)';
   mysqlConnection.query(query, [id, nombre, fase, precio, cantidad, total], (err, rows, fields) => {
       if(!err) {
           res.json({Status: 'Consumo  actualizado'});
       }else {
           console.log(err);
       }
   });
});

//Peticiones de eliminación
router.delete('/consumo/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM consumo_aves WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Dato consumo eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;