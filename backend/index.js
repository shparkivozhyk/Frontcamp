const express = require('express');
const bodyParser = require('body-parser');
const blogs = require('./jsons/blogs.json');
const logger = require('./logger');
const router = express.Router();
const app = express();
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.set('views', './views');
app.set('view engine', 'pug');

router.route('/blogs')
    .get(function(req, res) {
        res.send(blogs);
    })

router.route('/blogs/:blog_id')
    .get(function(req, res) {
        res.send(blogs[req.params.blog_id]);
    })
    .post(function(req, res) {
    	var textOfNewPost = 'I am a new post';
    	blogs[req.params.blog_id] = textOfNewPost;
    	res.send(blogs[req.params.blog_id]);
    })
    .put(function(req, res) {
    	var valueToReplace = 'I am replaced value';
    	blogs[req.params.blog_id] = valueToReplace;
    	res.send(blogs[req.params.blog_id]);
    })
    .delete(function(req, res) {
    	blogs[req.params.blog_id] = null;
    	res.send(blogs);
    })

app.get('*', function(req, res) {
    res.render('index', {title: 'Unknown page', message: req.url});
})
app.listen(3000);
