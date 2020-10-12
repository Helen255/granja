const { json } = require('express');
const fetch = require('node-fetch');
const Empleados = require('../models/Empleado');


async function empleados(req, res) {
  let url = 'http://localhost:3000/empleado';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('empleados', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearEmpleados');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'dpi': data.dpi,
    'puesto': data.puesto,
    'nombre': data.nombre,
    'usuario_id': data.usuario_id
  };
  console.log(body);
  await fetch('http://localhost:3000/empleado', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webEmpleado/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idempleado = req.params.empleadoId;

 await fetch('http://localhost:3000/empleado/' + idempleado)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarEmpleados', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let empleado = req.body;
  let idempleado = req.params.empleadoId;
  const body = {
    'id': empleado.id,
    'dpi': empleado.dpi,
    'puesto': empleado.puesto,
    'nombre': empleado.nombre,
    'usuario_id': empleado.usuario_id
  };

  await fetch('http://localhost:3000/empleado/' + idempleado, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webEmpleado');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idempleado = req.params.empleadoId;
  let url = "http://localhost:3000/empleado/"+idempleado ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarEmpleados',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let empleadoId = req.params.empleadoId;
 await fetch('http://localhost:3000/empleado/'+empleadoId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webEmpleado')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { empleados, crear, obtener, editar, actualizar, elimina, eliminar }