

const authorization = function(app, login, password) {
const mongoose = require('mongoose');
const User = require('../models/User');
mongoose.connect('mongodb://bloguser:blogpassword@ds227858.mlab.com:27858/blogusers');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy('local',
  function(username, password, done) {
    User.findOne({ login: username }, function (err, user) {
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