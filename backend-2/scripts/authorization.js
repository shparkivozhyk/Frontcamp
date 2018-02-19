

const authorization = function(app) {
    const User = require('../models/User');
    const mongoose = require('mongoose');;
    mongoose.connect('mongodb://bloguser:blogpassword@ds227858.mlab.com:27858/blogusers');
    
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    app.use(passport.initialize());
    app.use(passport.session());
    console.log('2222');
    passport.use(new LocalStrategy(function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          console.log('ssfffffffff');
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (password !== user.password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    ))
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    })};

module.exports = authorization;