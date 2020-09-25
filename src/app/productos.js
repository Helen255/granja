const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/productos',(req, res) => {
    mysqlConnection.query('SELECT * FROM producto', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/productos', (req, res) => {
    const { id, codigo, nombre, precio, stock, categoria_id, cliente_id } = req.body;
    const query = ` 
    CALL direcciones(?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, codigo, nombre, precio, stock,categoria_id, cliente_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Venta guardada'});
        }else {
            console.log(err);
        }


    });
});

module.exports = router;