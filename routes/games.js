var express = require('express');
var router = express.Router();
var gameController = require('../controllers/game');


router.post('/', function(req, res, next) { res.render('game', { title: 'Welcome to OKS enjoy yoursel' }); });
router.get('/', function(req, res, next) { res.render('game', { title: 'Welcome to OKS enjoy yoursel' }); });

module.exports = router;