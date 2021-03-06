const express = require('express');
const mysqlConnection = require('../db');
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

//Peticiones put
router.put('/usuarios/:id', (req, res) => {
    const {usuario, contrasenia} = req.body;
    const { id } = req.params;
    const query= 'CALL usuarios(?, ?, ?)';
    mysqlConnection.query(query, [id, usuario, contrasenia], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Usuario  actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Usuario eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;