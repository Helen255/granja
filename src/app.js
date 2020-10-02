const { response } = require('express');
const express = require('express');
const app = express();
const { config, engine } = require ('express-edge');
const path = require('path');
const mysqlConnection = require('../src/db');



//Configuraciones
app.set('port', process.env.PORT || 3000);

//ruta de las vistas usando  motor plantillas edge
app.use(engine);
app.set('views', path.join(__dirname, 'views'));



//Middlwares funciones ejecutables antes que las petiicones llequen al servidor
app.use(express.json());

//Rutas
//app.use(require('../src/routes/categoria'));
const categoria = require ('../src/routes/categoria_ruta.js');
app.use('/categoria/', categoria);

const cliente = require ('../src/routes/cliente_ruta.js');
app.use('/cliente/', cliente);

const compra = require ('../src/routes/compra_ruta.js');
app.use('/compra/', compra);

const direccion = require ('../src/routes/direccion_ruta.js');
app.use('/direccion/', direccion);

const empleado = require ('../src/routes/empleado_ruta.js');
app.use('/empleado/', empleado);

const fase = require ('../src/routes/fase_ruta.js');
app.use('/fase/', fase);

const motivoGasto = require ('../src/routes/motivoGasto_ruta.js');
app.use('/motivoGasto/', motivoGasto);

const producto = require ('../src/routes/producto_ruta.js');
app.use('/producto/', producto);

const proveedor = require ('../src/routes/proveedor_ruta.js');
app.use('/proveedor/', proveedor);

const telefono = require ('../src/routes/telefono_ruta.js');
app.use('/telefono/', telefono);

const usuario = require ('../src/routes/usuario_ruta.js');
app.use('/usuario/', usuario);
/*app.use(require('../src/routes/clientes'));
app.use(require('../src/routes/gastos'));
app.use(require('../src/routes/usuarios'));
app.use(require('../src/routes/empleados'));
app.use(require('../src/routes/clientes'));
app.use(require('../src/routes/proveedores'));
app.use(require('../src/routes/telefonos'));
app.use(require('../src/routes/direcciones'));
app.use(require('../src/routes/ventas'));
app.use(require('../src/routes/productos'));
app.use(require('../src/routes/detalle'));
app.use(require('../src/routes/compra'));
app.use(require('../src/routes/fase'));
app.use(require('../src/routes/motivoGasto'));
app.use(require('../src/routes/consumo'));

//rutas vistas
app.get('/',(req, res) => {
    //res.sendFile(path.resolve(__dirname, '../views/index.html'));
     res.render('index');  
});

app.get('/categorias',(req, res) => {
     res.render('categorias');  
});*/


//Inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});

