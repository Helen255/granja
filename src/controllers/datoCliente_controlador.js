const { json } = require('express');
const fetch = require('node-fetch');
const Clientes = require('../models/Cliente');


async function clientes(req, res) {
  let url = 'http://localhost:3000/cliente';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('clientes', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearClientes');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'nombre': data.nombre,
    'empresa': data.empresa
  };
  console.log(body);
  await fetch('http://localhost:3000/cliente', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webCliente/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idcliente = req.params.clienteId;

 await fetch('http://localhost:3000/cliente/' + idcliente)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarClientes', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let cliente = req.body;
  let idcliente = req.params.clienteId;
  const body = {
    'id': cliente.id,
    'nombre': cliente.nombre,
    'empresa': cliente.empresa
  };

  await fetch('http://localhost:3000/cliente/' + idcliente, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webCliente');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idcliente = req.params.clienteId;
  let url = "http://localhost:3000/cliente/"+idcliente ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarClientes',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let clienteId = req.params.clienteId;
 await fetch('http://localhost:3000/cliente/'+clienteId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webCliente')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { clientes, crear, obtener, editar, actualizar, elimina, eliminar }