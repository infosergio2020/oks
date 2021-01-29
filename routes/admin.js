var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuario');

/* GET home page. */
//redirecciona al tablero principal del admin
router.get('/', function(req, res, next) { res.render('admin/index', { title: 'MainBoard' }) });
//redirecciona al fomulario de creacion de usuario
router.get('/create_user', usuarioController.create_get);
router.post('/create_user', usuarioController.create_post);
//redirecciona al fomulario de actualizacion de usuario
router.get('/:id/update', usuarioController.update_get);
router.post('/:id/update', usuarioController.update_post);
//redirecciona al borrado de usuario
router.post('/:id/delete', usuarioController.delete);

router.get('/users', usuarioController.list);

router.get('/create_song', function(req, res, next) { res.render('admin/create_song', { title: 'Agregar cancion' }) });
router.get('/songs', function(req, res, next) { res.render('admin/songs', { title: 'Lista de canciones' }) });

module.exports = router;