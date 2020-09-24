const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/usuarios',(req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/usuarios', (req, res) => {
    const { id, usuario, contrasenia } = req.body;
    const query = ` 
    CALL usuarios(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, usuario, contrasenia ], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Usuario guardado'});
        }else {
            console.log(err);
        }


    });
});

module.exports = router;