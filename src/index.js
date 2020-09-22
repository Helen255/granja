const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);


//Middlwares funciones ejecutables antes que las petiicones llequen al servidor

//Rutas
 

//Inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});