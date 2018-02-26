
var express = require('express');
const app = express();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
// // const errorHandler = require('./scripts/errorHandler');
// // const logger = require('./logger')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());
const router = express.Router();
app.use('/', router);
app.set('views', './views');
app.set('view engine', 'pug');
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

const User = require('./models/User');
const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:shparkivozhyk@ds227858.mlab.com:27858/blogusers');

router.route('/login')
    .get(function(req, res, next) {
        res.render('user', {User: 'mrr'});
    })
    .post(function(req, res, next){
        passport.authenticate('local', function(err, user, info){
            // var data = JSON.stringify('/blogs');
            // res.setHeader('Content-Type', 'application/json');
            // res.setHeader('Content-Length', data.length);
            if (err) { return next(err)}
            if (!user) {
                console.log(info);
                return;
            }
            else {
                res.json({status: "Success", redirect: '/blogs'});
            }   
        })(req, res, next);
    });

const Blog = require('./models/Blog');
// const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');

router.route('/blogs')
    .get(function(req, res) {
        Blog.find(function(err, blogs) {
            if (err) {
                res.send(err.message);
            }
            res.render('blogs', {blogs: blogs})
        });
    })
    .post(function(req, res) {
        Blog.create({
            title: req.body.title,
            author: req.body.author,
            body: req.body.body,
            date: Date.now(),
            blog_id: req.body.blog_id
        }, function(err, blogs) {
            if (err) {
                res.send(err);
            }
        });
    })

router.route('/blogs/:blog_id')
    .get(function(req, res) {
        Blog.find({blog_id: req.params.blog_id}, function(err, blog) {
            if (err) {
                res.send(err.message);
            }
            else if (!blog.length) {
                res.render('index', {title: 'Blog doesn\'t exist', message: req.url});
            }
            else {
                res.render('blog', {blog: blog[0]});
            }
        });
    })  
    .put(function(req, res) {
        var query = {blog_id: req.params.blog_id};
        Blog.findOneAndUpdate(query, { $set: { body: req.body.body }}, function(err, blog) {
            if (err) res.send(err.message);
        })
    })
    .delete(function(req, res) {
        Blog.findOneAndRemove({blog_id: req.params.blog_id}, function(err, blogs) {
            if (err) res.send(err);
        })
    })

app.use(function(err, req, res, next) {
    errorHandler(err, req, res, next);
});
app.get('*', function(req, res) {
    res.render('index', {title: 'Unknown page', message: req.url});
});
app.listen(3000);
