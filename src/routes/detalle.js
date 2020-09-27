const express = require('express');
const mysqlConnection = require('../db');
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

//peticiones post
router.post('/detalle', (req, res) => {
    const { id, precio, cantidad, total, subtotal, venta_id, producto_id } = req.body;
    const query = ` 
    CALL detalleVentas(?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, precio, cantidad, total, subtotal, venta_id, producto_id ], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Detalle venta guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/detalle/:id', (req, res) => {
    const {precio, cantidad, total, subtotal, venta_id, producto_id } = req.body;
    const { id } = req.params;
    const query= 'CALL detalleVentas(?, ?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, precio, cantidad, total, subtotal, venta_id, producto_id ], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Detalle  actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 /*Peticiones de eliminación
router.delete('/detalle/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM detalle_venta WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Detalle eliminado'});
        }else {
            console.log(err);
        }
    });
});
*/
module.exports = router;