var express = require('express');
var router = express.Router();
var friendsController = require('../controllers/friendsController');

router.get('/', friendsController.friends_get);

module.exports = router;
