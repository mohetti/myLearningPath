var passport = require('passport');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get(
  '/facebook/login',
  passport.authenticate('facebook'),
  function (req, res, next) {
    console.log(':::::::user in the redirect', req.user);
  }
);

router.get(
  '/return',
  passport.authenticate('facebook', { session: false }),
  function (req, res, next) {
    const token = jwt.sign(req.user.toJSON(), 'your_jwt_secret');
    res.redirect(`http://localhost:3000/token/${token}/${req.user._id}`);
  }
);

module.exports = router;
