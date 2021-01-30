var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuario');
var songController = require('../controllers/cancion');

/* GET home page. */
//redirecciona al tablero principal del admin
router.get('/', function(req, res, next) { res.render('admin/index', { title: 'MainBoard' }) });
//redirecciona al fomulario de creacion de usuario
router.get('/create_user', usuarioController.create_get);
router.post('/create_user', usuarioController.create_post);
//redirecciona al fomulario de actualizacion de usuario
router.get('/:id/update_user', usuarioController.update_get);
router.post('/:id/update_user', usuarioController.update_post);
//redirecciona al borrado de usuario
router.post('/:id/delete', usuarioController.delete);
//listado de todos los usuarios
router.get('/users', usuarioController.list);


//redirecciona al fomulario de creacion de cancion
router.get('/create_song', songController.create_get);
router.post('/create_song', songController.create_post);
//redirecciona al fomulario de actualizacion de cancion
router.get('/:id/update_song', songController.update_get);
router.post('/:id/update_song', songController.update_post);
//redirecciona al borrado de cancion
router.post('/:id/delete_song', songController.delete);
//listado de todos los canciones
router.get('/songs', songController.list);

module.exports = router;