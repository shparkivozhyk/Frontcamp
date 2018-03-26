var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

function loginHandler(req, res, next) {
    passport.authenticate('local', function(err, user, info){
        if (err) { return next(err)}
        if (!user) {
            console.log(info);
            return;
        }
        else {
            res.redirect('/blogs');
        }   
    })(req, res, next);
}

export default loginHandler;