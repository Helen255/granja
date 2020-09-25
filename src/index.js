const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);


//Middlwares funciones ejecutables antes que las petiicones llequen al servidor
app.use(express.json());

//Rutas
app.use(require('./app/categoria'));
app.use(require('./app/consumo'));
app.use(require('./app/compra'));
app.use(require('./app/usuarios'));
app.use(require('./app/empleados'));
app.use(require('./app/clientes'));
app.use(require('./app/proveedores'));
app.use(require('./app/telefonos'));
app.use(require('./app/direcciones'));

//Inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});