const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);


//Middlwares funciones ejecutables antes que las petiicones llequen al servidor
app.use(express.json());

//Rutas
app.use(require('./routes/categoria'));
app.use(require('./routes/consumo'));
app.use(require('./routes/compra'));
app.use(require('./routes/usuarios'));
app.use(require('./routes/empleados'));
app.use(require('./routes/clientes'));
app.use(require('./routes/proveedores'));

//Inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});