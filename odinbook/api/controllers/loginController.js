var user = require('../models/user');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var jwt = require('jsonwebtoken');

exports.sign_up_post = function (req, res, next) {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    const newUser = new user({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      facebookId: 'none',
    }).save((err) => {
      if (err) return next(err);
      return res.status(200).json({
        success: true,
        redirectUrl: '/login',
      });
    });
  });
};

exports.log_in_post = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({
        success: false,
        message: 'authentication failed',
        status: 401,
      });
    }
    req.login(user, { session: false }, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
      return res.json({
        success: true,
        message: 'authentication succeeded',
        status: 200,
        userId: user._id,
        token,
      });
    });
  })(req, res, next);
};
