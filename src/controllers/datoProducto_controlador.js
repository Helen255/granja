const { json } = require('express');
const fetch = require('node-fetch');
const producto = require('../models/Producto');


async function productos(req, res) {
  let url = 'http://localhost:3000/producto';

  await fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('productos', { data });
    }).catch(err => {
      console.log(error);

    });
}

function obtener(req, res) {
  res.render('crearProductos');
}
async function crear(req, res) {
  let data = await req.body;
  const body = {
    'id': data.id,
    'codigo': data.codigo,
    'precio': data.precio,
    'stock': data.stock,
    'activo': data.activo,
    'categoria_id': data.categoria_id
  };
  console.log(body);
  await fetch('http://localhost:3000/producto', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => {
      res.redirect('/webProducto/');
    })
    .catch(error => {
      res.render('index', { respon: 'dato incorrecto' });
      console.log(error);
    });
}

async function editar(req, res) {
  let idproducto = req.params.productoId;

 await fetch('http://localhost:3000/producto/' + idproducto)
    .then(res => res.json())
    .then(data => {
      //ruta vista
      res.render('actualizarProductos', { data })
      console.log(data)
    }).catch(err => {
      console.log(err);
    });
}

async function actualizar(req, res) {
  let producto = req.body;
  let idproducto = req.params.productoId;
  const body = {
    'id': producto.id,
    'codigo': producto.codigo,
    'precio': producto.precio,
    'stock': producto.stock,
    'activo': producto.activo,
    'categoria_id': producto.categoria_id
  };

  await fetch('http://localhost:3000/producto/' + idproducto, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webProducto');
  })
  .catch(error => {
    res.render('index', { respon: 'dato incorrecto' });
    console.log(error);
  });
}


function elimina(req, res){
  let idproducto = req.params.productoId;
  let url = "http://localhost:3000/producto/"+idproducto ;

      fetch(url)
      .then(res => res.json())
      .then(data => {
             res.render('eliminarProductos',{data})
      }).catch(err =>{
      console.log(error);     
  });
}

async function eliminar(req, res){
  let productoId = req.params.productoId;
 await fetch('http://localhost:3000/producto/'+productoId, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(json => {
    res.redirect('/webProducto')
  }).catch(error => {
    res.render('index', {respon : 'dato Incorrecto'});
    console.log(error);
  });
}





module.exports = { productos, crear, obtener, editar, actualizar, elimina, eliminar }