var express = require('express');
var router = express.Router();
var passport = require('passport');

var loginController = require('../controllers/loginController');

/* Login in with existing user */
router.post('/', loginController.log_in_post);

router.post('/signup', loginController.sign_up_post);

module.exports = router;
