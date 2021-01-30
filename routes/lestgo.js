var express = require('express');
var router = express.Router();

var gameController = require('../controllers/game');
const usuario = require('../models/usuario');

router.get('/', gameController.create_new_user_get);
router.post('/', gameController.create_new_user_post);

module.exports = router;