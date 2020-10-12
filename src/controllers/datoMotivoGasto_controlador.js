const { json } = require('express');
const fetch = require('node-fetch');
const morivoGasto = require('../models/MotivoGasto');


async function motivoGastos(req, res) {
  let url = 'http://localhost:3000/motivoGasto';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('motivoGastos', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearMotivoGastos');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'tipo_gasto': data.tipo_gasto
  };
  console.log(body);
  await fetch('http://localhost:3000/motivoGasto', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webMotivoGasto/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idmotivoGasto = req.params.motivoGastoId;

 await fetch('http://localhost:3000/motivoGasto/' + idmotivoGasto)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarMotivoGastos', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let motivoGasto = req.body;
  let idmotivoGasto = req.params.motivoGastoId;
  const body = {
    'id': motivoGasto.id,
    'tipo_gasto': motivoGasto.tipo_gasto
  };

  await fetch('http://localhost:3000/motivoGasto/' + idmotivoGasto, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webMotivoGasto');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idmotivoGasto = req.params.motivoGastoId;
  let url = "http://localhost:3000/motivoGasto/"+idmotivoGasto ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarMotivoGastos',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let motivoGastoId = req.params.motivoGastoId;
 await fetch('http://localhost:3000/motivoGasto/'+motivoGastoId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webMotivoGasto')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { motivoGastos, crear, obtener, editar, actualizar, elimina, eliminar }