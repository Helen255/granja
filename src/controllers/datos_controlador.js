const { json } = require('express');
const fetch = require('node-fetch');
const Categorias = require('../models/Categoria');


async function categorias(req, res) {
  let url = 'http://localhost:3000/categoria';
  
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('categorias', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res){
 res.render('crear');
}
async function crear(req, res) {
  let data = await req.body;
  console.log('hola', req.body);
  const body = {
    'id': data.id,
    'nombre': data.nombre,
    'descripcion': data.descripcion
  };
  console.log(body);
  await fetch('http://localhost:3000/categoria', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/web/');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}

module.exports = { categorias, crear, obtener }