const fetch = require('node-fetch');
const Categorias = require('../models/Categoria');


async function categorias(req, res){
    let url = 'http://localhost:3000/categoria';

        await fetch(url)
        .then(res => res.json())
        .then(data => {
                res.render('categorias', {data});
        }).catch(err =>{
        console.log(error);

    });
}

module.exports = {categorias}