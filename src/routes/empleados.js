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
    const { id, nombre, dpi, puesto, usuario_id } = req.body;
    const query = ` 
    CALL empleados(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, dpi, puesto, nombre, usuario_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado guardado'});
        }else {
            console.log(err);
        }


    });
});

//Peticiones put
router.put('/empleados/:id', (req, res) => {
    const {dpi, nombre, puesto, usuario_id} = req.body;
    const { id } = req.params;
    const query= 'CALL empleados(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, dpi, puesto, nombre, usuario_id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado  actualizado'});
        }else {
            console.log(err);
        }
    });
 });

 //Peticiones delete
router.delete('/empleados/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM empleado WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Empleado eliminado'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;