

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
        console.log('dddaaaa');
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
    passport.serializeUser(function(user, cb) {
      cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
      db.users.findById(id, function (err, user) {
        if (err) { 
            return cb(err); 
        }
        cb(null, user);
      });
    });

module.exports = authorization;