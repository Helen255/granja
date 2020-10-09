const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datos_controlador');
   
router.route('/')
.get(datosControlador.categorias)

router.route('/form')
.post(datosControlador.crear)

router.route('/recibir')
.get(datosControlador.obtener)

 //router.route('/:motivoGastoId')
//.put(datosControlador.update)

/*router.route('/:motivoGastoId')
.delete(motivoGastoControlador.delete)*/
/*router.route( .post(datosControlador.ingresar)'/show/:songId').get(songController.show);
router.route('/edit/:songId').get(songController.edit);
router.route('/update/:songId').post(songController.update);
router.route('/remove/:songId').get(songController.remove);
router.route('/destroy/:songId').post(songController.destroy);
router.route('/search/').get(songController.search);*/

    

    module.exports = router;
