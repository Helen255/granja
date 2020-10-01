const Categoria = require('../models/Categoria');


exports.create = (req, res) => {
    const categoria = new Categoria({
        id: 0,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    Categoria.crear(categoria, (err, data) => {
        if (err)
            console.log(err);
       /* res.status(500).send({
            message: err.message || 'Error al crear categoria'
        });*/
        else res.send(data);
    });
}





/*
//Peticioens get
exports.lista = (req, res) => {
    mysqlConnection.query('SELECT * FROM categoria', (err, rows, fields ) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
};

const express = require('express');
const mysqlConnection = require('../db');
const router = express.Router();


//peticiones post
exports.crear = (req, res) => {
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
};
/*
//Peticiones de actualización
router.put('/categoria/:id', (req, res) => {
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

//Peticiones de eliminación
router.delete('/categoria/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM categoria WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Categoria eliminada'});
        }else {
            console.log(err);
        }
    });
});*/
//module.exports = router; 






