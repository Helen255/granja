const express = require('express');
const app = express();

//Inicializando servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});