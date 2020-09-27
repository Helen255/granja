const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/ventas',(req, res) => {
    mysqlConnection.query('SELECT * FROM venta', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/ventas', (req, res) => {
    const { id, total, fecha_venta, usuario_id, cliente_id}, cliente_id = req.body;
    const query = ` 
    CALL ventas(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id,  total, fecha_venta, usuario_id, cliente_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Venta guardada'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/ventas/:id', (req, res) => {
    const {total, fecha_venta, usuario_id, cliente_id} = req.body;
    const { id } = req.params;
    const query= 'CALL ventas(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, total, fecha_venta, usuario_id, cliente_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Venta  actualizada'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/ventas/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM venta WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Venta eliminada'});
        }else {
            console.log(err);
        }
    });
});
 
module.exports = router;