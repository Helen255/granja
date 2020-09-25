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

//peticiones post
router.post('/direcciones', (req, res) => {
    const { id, direccion, cliente_id, empleado_id } = req.body;
    const query = ` 
    CALL direcciones(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, direccion, cliente_id, empleado_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Dirección guardada'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/direcciones/:id', (req, res) => {
    const {direccion, cliente_id, empleado_id} = req.body;
    const { id } = req.params;
    const query= 'CALL direcciones(?, ?, ?, ?)';
    mysqlConnection.query(query, [id,direccion, cliente_id, empleado_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Dirección  actualizada'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/direcciones/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM direccion WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Dirección eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;