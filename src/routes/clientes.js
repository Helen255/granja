const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//Peticioens get
router.get('/clientes',(req, res) => {
    mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/clientes', (req, res) => {
    const { id, nombre, empresa } = req.body;
    const query = ` 
    CALL clientes(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, nombre, empresa], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Cliente guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/clientes/:id', (req, res) => {
    const {nombre, empresa} = req.body;
    const { id } = req.params;
    const query= 'CALL clientes(?, ?, ?)';
    mysqlConnection.query(query, [id, nombre, empresa], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Cliente  actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Cliente eliminado'});
        }else {
            console.log(err);
        }
    });
});

 

module.exports = router;