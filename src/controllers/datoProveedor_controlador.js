const { json } = require('express');
const fetch = require('node-fetch');
const proveedor = require('../models/Proveedor');


async function proveedores(req, res) {
  let url = 'http://localhost:3000/proveedor';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('proveedores', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearProveedores');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'nombre': data.nombre,
    'empresa': data.empresa,
    'compras_id': data.compras_id
  };
  console.log(body);
  await fetch('http://localhost:3000/proveedor', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webProveedor/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idproveedor = req.params.proveedorId;

 await fetch('http://localhost:3000/proveedor/' + idproveedor)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarProveedores', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let proveedor = req.body;
  let idproveedor = req.params.proveedorId;
  const body = {
    'id': proveedor.id,
    'nombre': proveedor.nombre,
    'empresa': proveedor.empresa,
    'compras_id': proveedor.compras_id
  };

  await fetch('http://localhost:3000/proveedor/' + idproveedor, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webProveedor');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idproveedor = req.params.proveedorId;
  let url = "http://localhost:3000/proveedor/"+idproveedor;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarProveedores',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let proveedorId = req.params.proveedorId;
 await fetch('http://localhost:3000/proveedor/'+proveedorId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webProveedor')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { proveedores, crear, obtener, editar, actualizar, elimina, eliminar }