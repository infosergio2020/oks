var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuario');
var songController = require('../controllers/cancion');


/* GET home page. */
router.get('/', function(req, res, next) { res.render('index', { title: 'Main' }) });

router.get('/game',songController.list_3_canciones);

module.exports = router;
