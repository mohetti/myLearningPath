var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('GET LATEST POSTS');
});

router.post('/post', function (req, res, next) {
  res.render('POST new POST');
});

router.post('/post/comment', function (req, res, next) {
  res.render('Comment Post');
});

router.post('/post/like', function (req, res, next) {
  res.render('Like Post');
});

module.exports = router;
