const express = require('express');
const bodyParser = require('body-parser');
const blogs = require('./jsons/blogs.json');
const router = express.Router();
const app = express();
app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
// app.set('views', './views');
// app.set('view engine', 'pug');

router.route('/blogs')
    .get(function(req, res) {
        res.send(blogs);
    })

router.route('/blogs/:blog_id')
    .get(function(req, res) {
        res.send(blogs[req.params.blog_id]);
    })


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    // res.render('index', {title: 'Hey', message: 'Hello there!'});
})
app.listen(3000);
