const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();



router.get('/',(req, res) => {
    mysqlConnection.query('SELECT * FROM categoria', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const { id, nombre, descripcion } = req.body;
    const query = `
    SET @id = ?;
    SET @nombre = ?;
    SET @descripcion = ?;
    CALL categorias(@id, @nombre, @descripcion);
    `;
    mysqlConnection.query(query, [id, nombre, descripcion], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Categoria guardada'});
        }else {
            con.log(err);
        }


    });
});
module.exports = router;