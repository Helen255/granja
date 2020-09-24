const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/compra',(req, res) => {
    mysqlConnection.query('SELECT * FROM compra_aves', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/compra', (req, res) => {
    const { id, descripcion, numero_aves, precio, fecha_compra, total } = req.body;
    const query = ` 
    CALL comprasAves(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, descripcion, numero_aves, precio, fecha_compra, total], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Compra guardada'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones de put
router.put('/compra/:id', (req, res) => {
    const {descripcion, numero_aves, precio, fecha_compra, total} = req.body;
    const { id } = req.params;
    const query= 'CALL comprasAves(?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, descripcion, numero_aves, precio, fecha_compra, total], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Compra  actualizada'});
        }else {
            console.log(err);
        }
    });
 });


 //Peticiones delete
router.delete('/conmpra/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM compra_aves WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Dato compra eliminado'});
        }else {
            console.log(err);
        }
    });
});

 
module.exports = router;