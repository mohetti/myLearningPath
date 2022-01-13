var express = require('express');
var router = express.Router();
var jwtauthController = require('../controllers/jwtauthController');

router.get('/', jwtauthController.auth_get);

module.exports = router;
