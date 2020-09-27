const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/gastos',(req, res) => {
    mysqlConnection.query('SELECT * FROM gastos', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/gastos', (req, res) => {
    const { id, total, fecha, codigo, proveedores_id, fases_id } = req.body;
    const query = ` 
    CALL consumoAves(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id,  total, fecha, codigo, proveedores_id, fases_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Gasto guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/gastos/:id', (req, res) => {
   const { total, fecha, codigo, proveedores_id, fases_id} = req.body;
   const { id } = req.params;
   const query= 'CALL gastos(?, ?, ?, ?, ?, ?)';
   mysqlConnection.query(query, [id,  total, fecha, codigo, proveedores_id, fases_id], (err, rows, fields) => {
       if(!err) {
           res.json({Status: 'Gasto  actualizado'});
       }else {
           console.log(err);
       }
   });
});

//Peticiones delete
router.delete('/gastos/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM gastos WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Dato de gasto eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;