var User = require('../models/user');
exports.friends_get = function (req, res, next) {
  User.find({}, 'first_name last_name', function (err, users) {
    if (err) {
      next(err);
    }
    res.send(users);
  });
};
