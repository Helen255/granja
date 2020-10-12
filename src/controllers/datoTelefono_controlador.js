const { json } = require('express');
const fetch = require('node-fetch');
const Telefono = require('../models/Telefono');


async function telefonos(req, res) {
  let url = 'http://localhost:3000/telefono';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('telefonos', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearTelefonos');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'telefono': data.telefono,
    'empleado_id': data.empleado_id,
    'cliente_id': data.cliente_id,
    'proveedores_id': data.proveedores_id
    
  };
  console.log(body);
  await fetch('http://localhost:3000/telefono', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webTelefono/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idtelefono = req.params.telefonoId;

 await fetch('http://localhost:3000/telefono/' + idtelefono)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarTelefonos', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let telefono = req.body;
  let idtelefono = req.params.telefonoId;
  const body = {
    'id': telefono.id,
    'telefono': telefono.telefono,
    'empleado_id': telefono.empleado_id,
    'cliente_id': telefono.cliente_id,
    'proveedores_id': telefono.proveedores_id
  };

  await fetch('http://localhost:3000/telefono/' + idtelefono, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webTelefono');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idtelefono = req.params.telefonoId;
  let url = "http://localhost:3000/telefono/"+idtelefono;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarTelefonos',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let telefonoId = req.params.telefonoId;
 await fetch('http://localhost:3000/telefono/'+telefonoId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webTelefono')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { telefonos, crear, obtener, editar, actualizar, elimina, eliminar }