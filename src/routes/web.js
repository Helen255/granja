const express = require('express');
let router = express.Router();
const datosControlador = require('../controllers/datos_controlador');

router.route('/')
    //.get(datosController.categorias)
    .get(datosControlador.categorias)

    /*.post(songController.multerMiddle(),songController.create);
router.route('/show/:songId').get(songController.show);
router.route('/edit/:songId').get(songController.edit);
router.route('/update/:songId').post(songController.update);
router.route('/remove/:songId').get(songController.remove);
router.route('/destroy/:songId').post(songController.destroy);
router.route('/search/').get(songController.search);*/

    

    module.exports = router;
