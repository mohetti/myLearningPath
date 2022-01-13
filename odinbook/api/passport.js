var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var bcrypt = require('bcryptjs');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: '495391775211179',
      clientSecret: '2bcdf3506161ec8983835cde3ebd8900',
      callbackURL: 'http://localhost:9000/auth/return',
      profileFields: ['id', 'emails', 'name'],
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ facebookId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          const newUser = new User({
            first_name: profile.name.familyName,
            last_name: profile.name.givenName,
            email: 'fb',
            password: null,
            facebookId: profile.id,
          }).save((err) => {
            if (err) return done(err);
            done(null, user);
          });
        }
        if (user) {
          done(null, user);
        }
      });
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    function (username, password, done) {
      User.findOne({ email: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect password' });
          }
        });
      });
    }
  )
);
