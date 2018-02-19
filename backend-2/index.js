const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authorization = require('./scripts/authorization');
authorization(app);
// const errorHandler = require('./scripts/errorHandler');
// const logger = require('./logger');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use('/', router);
app.set('views', './views');
app.set('view engine', 'pug');
const Blog = require('./models/Blog');
const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');

router.route('/login')
    .get(function(req, res) {
        res.render('user', {User: 'login'});
    })
    .post(function(req, res) {
        console.log('ssssdddd');
        passport.authenticate({ successRedirect: '/blogs', failureRedirect: '/login2'});
        console.log('ddrrrrdsaa');
    })


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

// app.use(function(err, req, res, next) {
//     errorHandler(err, req, res, next);
// });
app.get('*', function(req, res) {
    res.render('index', {title: 'Unknown page', message: req.url});
});
app.listen(3000);
