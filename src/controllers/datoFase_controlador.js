const { json } = require('express');
const fetch = require('node-fetch');
const Fases = require('../models/Fase');


async function fases(req, res) {
  let url = 'http://localhost:3000/fase';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('fases', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearFases');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'numero_fase': data.numero_fase
  };
  console.log(body);
  await fetch('http://localhost:3000/fase', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webFase/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idfase = req.params.faseId;

 await fetch('http://localhost:3000/fase/' + idfase)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarFases', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let fase = req.body;
  let idfase = req.params.faseId;
  const body = {
    'id': fase.id,
    'numero_fase': fase.numero_fase
  };

  await fetch('http://localhost:3000/fase/' + idfase, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webFase');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idfase = req.params.faseId;
  let url = "http://localhost:3000/fase/"+idfase ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarFases',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let faseId = req.params.faseId;
 await fetch('http://localhost:3000/fase/'+faseId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webFase')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { fases, crear, obtener, editar, actualizar, elimina, eliminar }