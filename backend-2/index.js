const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const logger = require('./logger');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use('/', router);
app.set('views', './views');
app.set('view engine', 'pug');

const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');
const Blog = require('./models/Blog');
router.route('/blogs')
    .get(function(req, res) {
        Blog.find(function(err, blogs) {
            if (err) {
                logger.error(err.message);
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
                logger.error(err.message);
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
        console.log('put is working');
        console.log(req.body);
        Blog.findOneAndUpdate({blog_id: req.body.blog_id}, {body: req.body.body}, {new: true}, function(err, blog) {
            if (err) res.send(err);
            console.log(blog);
        })
    })
    .delete(function(req, res) {

    })

app.get('*', function(req, res) {
    res.render('index', {title: 'Unknown page', message: req.url});
})
app.listen(3000);
