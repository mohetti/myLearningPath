var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function (req, res, next) {
  res.render('GET LATEST POSTS from posts');
});

router.get('/:id', function (req, res, next) {
  res.render('GET USER PROFILE DIFFERENT FROM LOGGED IN');
});

module.exports = router;
