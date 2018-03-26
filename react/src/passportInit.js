var passportInit = (function() {
    var express = require('express');
    const app = express();
    const User = require('../models/User');
    var passport = require('passport');
    var Strategy = require('passport-local').Strategy;
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://shparkivozhyk:shparkivozhyk@ds227858.mlab.com:27858/blogusers');
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new Strategy(function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (password !== user.password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user, {message: 'You are awesome'});
        });
      }
    ))

    passport.serializeUser(function(user, cb) {
      cb(null, user.user_id);
    });
    passport.deserializeUser(function(id, done) {
      User.findOne({user_id: id}, function(err, user) {
        done(err, user);
      });
    });
})();

export default passportInit;