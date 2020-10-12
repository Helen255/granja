const { json } = require('express');
const fetch = require('node-fetch');
const Direcciones = require('../models/Direccion');


async function direcciones(req, res) {
  let url = 'http://localhost:3000/direccion';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('direcciones', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearDirecciones');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'direccion': data.direccion,
    'cliente_id': data.cliente_id,
    'empleado_id': data.empleado_id
  };
  console.log(body);
  await fetch('http://localhost:3000/direccion', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webDireccion/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let iddireccion = req.params.direccionId;

 await fetch('http://localhost:3000/direccion/' + iddireccion)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarDirecciones', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let direccion = req.body;
  let idDireccion = req.params.direccionId;
  const body = {
    'id': direccion.id,
    'direccion': direccion.direccion,
    'cliente_id': direccion.cliente_id,
    'empleado_id': direccion.empleado_id
  };

  await fetch('http://localhost:3000/direccion/' + idDireccion, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webDireccion');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let iddireccion = req.params.direccionId;
  let url = "http://localhost:3000/direccion/"+iddireccion ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarDirecciones',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let direccionId = req.params.direccionId;
 await fetch('http://localhost:3000/direccion/'+direccionId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webDireccion')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { direcciones, crear, obtener, editar, actualizar, elimina, eliminar }