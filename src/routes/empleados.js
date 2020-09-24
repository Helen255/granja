const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();


//Peticioens get
router.get('/empleados',(req, res) => {
    mysqlConnection.query('SELECT * FROM empleado', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

//peticiones post
router.post('/empleados', (req, res) => {
    const { id, dpi, puesto, usuario_id } = req.body;
    const query = ` 
    CALL empleados(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, dpi, puesto, usuario_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado guardado'});
        }else {
            console.log(err);
        }


    });
});

module.exports = router;