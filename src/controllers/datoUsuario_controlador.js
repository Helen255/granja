const { json } = require('express');
const fetch = require('node-fetch');
const Telefono = require('../models/Usuario');


async function usuarios(req, res) {
  let url = 'http://localhost:3000/usuario';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('usuarios', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearUsuarios');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'usuario': data.usuario,
    'contrasenia': data.contrasenia
    
  };
  console.log(body);
  await fetch('http://localhost:3000/usuario', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webUsuario/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idusuario = req.params.usuarioId;

 await fetch('http://localhost:3000/usuario/' + idusuario)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarUsuarios', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let usuario = req.body;
  let idusuario = req.params.usuarioId;
  const body = {
    'id': usuario.id,
    'usuario': usuario.usuario,
    'contrsenia': usuario.contrasenia,
  };

  await fetch('http://localhost:3000/usuario/' + idusuario, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webUsuario');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idusuario = req.params.usuarioId;
  let url = "http://localhost:3000/usuario/"+idusuario;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarUsuarios',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let usuarioId = req.params.usuarioId;
 await fetch('http://localhost:3000/usuario/'+usuarioId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webUsuario')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { usuarios, crear, obtener, editar, actualizar, elimina, eliminar }