var jwt = require('jsonwebtoken');

exports.auth_get = function (req, res, next) {
  const bearerHeader = req.headers['authorization'];
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  jwt.verify(bearerToken, 'your_jwt_secret', function (err, decodedToken) {
    if (err) {
      console.log('token did not work');
      return res.json({
        success: false,
        message: 'token authentication failed',
        status: 403,
      });
    }

    req.token = bearerToken;
    req.decodedToken = decodedToken;
    res.json({
      success: true,
      message: 'token authentication succeeded',
      status: 200,
      token: req.token,
    });
    next();
  });
};
