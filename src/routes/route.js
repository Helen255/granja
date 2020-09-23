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
    CALL categorias(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, nombre, descripcion], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Categoria guardada'});
        }else {
            console.log(err);
        }


    });
});

router.put('/:id', (req, res) => {
   const {nombre, descripcion} = req.body;
   const { id } = req.params;
   const query= 'CALL categorias(?, ?, ?)';
   mysqlConnection.query(query, [id, nombre, descripcion], (err, rows, fields) => {
       if(!err) {
           res.json({Status: 'Categoria actualizada'});
       }else {
           console.log(err);
       }
   });
});


module.exports = router;