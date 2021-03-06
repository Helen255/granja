const { response } = require('express');
const express = require('express');
const app = express();
const { config, engine } = require('express-edge');
const path = require('path');
const mysqlConnection = require('../src/db');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


//Configuraciones
app.set('port', process.env.PORT || 3000);





//Middlwares funciones ejecutables antes que las peticicones llequen al servidor
app.use(express.json());

//Rutas api
const categoria = require('../src/routes/categoria_ruta.js');
app.use('/categoria/', categoria);

const cliente = require('../src/routes/cliente_ruta.js');
app.use('/cliente/', cliente);

const compra = require('../src/routes/compra_ruta.js');
app.use('/compra/', compra);

const direccion = require('../src/routes/direccion_ruta.js');
app.use('/direccion/', direccion);

const empleado = require('../src/routes/empleado_ruta.js');
app.use('/empleado/', empleado);

const fase = require('../src/routes/fase_ruta.js');
app.use('/fase/', fase);

const motivoGasto = require('../src/routes/motivoGasto_ruta.js');
app.use('/motivoGasto/', motivoGasto);

const producto = require('../src/routes/producto_ruta.js');
app.use('/producto/', producto);

const proveedor = require('../src/routes/proveedor_ruta.js');
app.use('/proveedor/', proveedor);

const telefono = require('../src/routes/telefono_ruta.js');
app.use('/telefono/', telefono);

const usuario = require('../src/routes/usuario_ruta.js');
app.use('/usuario/', usuario);

const venta = require('../src/routes/venta_ruta.js');
app.use('/venta/', venta);

const detalleVenta = require('../src/routes/detalleVenta_ruta.js');
app.use('/detalleVenta/', detalleVenta);

//ruta de las vistas usando  motor plantillas edge
app.use(engine);
app.set('views', path.join(__dirname, 'views'));

//rutas vistas
app.get('/', (req, res) => {
    res.render('index');
});

//inicio página
app.get('/inicio', (req, res) => {
    res.render('inicio');
});



//vista categoria
const vistaCategoria = require('./routes/web')
app.use('/web/', vistaCategoria)

//vista cliente
const vistaCliente = require('./routes/webCliente')
app.use('/webCliente/', vistaCliente)

//vista dirección
const vistaDireccion = require('./routes/webDireccion')
app.use('/webDireccion/', vistaDireccion)

//vista dirección
const vistaEmpleado = require('./routes/webEmpleado')
app.use('/webEmpleado/', vistaEmpleado)

//vista fase
const vistaFase = require('./routes/webFase')
app.use('/webFase/', vistaFase)

//vista motivoGasto
const vistaMotivoGasto = require('./routes/webMotivoGasto')
app.use('/webMotivoGasto/', vistaMotivoGasto)

//vista producto
const vistaProducto = require('./routes/webProducto')
app.use('/webProducto/', vistaProducto)

//vista proveedores
const vistaProveedor = require('./routes/webProveedor')
app.use('/webProveedor/', vistaProveedor)

//vista proveedores
const vistaTelefono = require('./routes/webTelefono')
app.use('/webTelefono/', vistaTelefono)

//vista usuarios
const vistaUsuario = require('./routes/webUsuario')
app.use('/webUsuario/', vistaUsuario)


//vista ventas
const vistaVenta = require('./routes/webVenta')
app.use('/webVenta/', vistaVenta)

//vista loginn
const vistaInicio = require('./routes/webUsuario')
app.use('/login/', vistaInicio)

//Inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});

