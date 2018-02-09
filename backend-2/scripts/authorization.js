

const authorization = function(app, login, password) {
    const mongoose = require('mongoose');
    const User = require('../models/User');
    mongoose.connect('mongodb://bloguser:blogpassword@ds227858.mlab.com:27858/blogusers');
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        new LocalStrategy({
                login: 'login',
                password: 'password'
            },
            function(login, password, done) {
                
                User.findOne({login: login}, function(err, user) {
                    if (err) {
                        console.log('error');
                        return done(err);
                    }
                    else if (user) {
                        console.log('user exists');
                        return done(null, user);
                    }
                    else {

                    }return done(null, false, {message: 'Such  user doesn\'t exist'});
                });
            })
    );
}

module.exports = authorization;