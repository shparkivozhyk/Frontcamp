const authorization = function(app, login, password) {
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://bloguser:blogpassword@ds227858.mlab.com:27858/blogusers');
    app.use(passport.initialize());
    passport.use(
        new LocalStrategy({
                login: 'login',
                password: 'password'
            },
            function(username, password, done) {
                User.findOne({login: login}, function(err, user) {
                    if (err) {
                        return done(err);
                    }
                    else if (user) {
                        return done(null, user);
                    }
                    else return done(null, false, {message: 'Such a user doesn\'t exist'});
                });
            })
    );
}

module.exports = authorization;