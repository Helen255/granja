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

function obtener(req, res) {
  res.render('crear');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'nombre': data.nombre,
    'descripcion': data.descripcion
  };
  console.log(body);
  await fetch('http://localhost:3000/categoria' +idcategoria, {
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

async function editar(req, res) {
  let idcategoria = req.params.categoriaId;

 await fetch('http://localhost:3000/categoria/' + idcategoria)
    .then(res => res.json())
    .then(data => {
      res.render('actualizar', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let categoria = req.body;
  let idcategoria = req.params.categoriaId;
  const body = {
    'id': categoria.id,
    'nombre': categoria.nombre,
    'descripcion': categoria.descripcion
  };

  await fetch('http://localhost:3000/categoria/' + idcategoria, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/web');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idcategoria = req.params.categoriaId;
  let url = "http://localhost:3000/categoria/"+idcategoria ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminar',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let categoriaId = req.params.categoriaId;
 await fetch('http://localhost:3000/categoria/'+categoriaId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/web')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { categorias, crear, obtener, editar, actualizar, elimina, eliminar }