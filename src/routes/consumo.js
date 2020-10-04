const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


function index(req, res) {
    let url = 'https://localhost:3000/categoria';
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}


module.exports = { index };    
module.exports = router;        