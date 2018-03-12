import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import Blogs from './client/components/Blogs'

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.set('views', './src/client/views');
app.set('view engine', 'pug');
const router = express.Router();
app.use('/', router);
import { StaticRouter } from 'react-router-dom';
const BlogModel = require('../models/Blog');
const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');

router.route('/blogs')
    .get(function(req, res) {
        BlogModel.find(function(err, blogs) {
            if (err) {
                res.send(err.message);
            };
            // const context = {};
            const body = renderToString(<Blogs blogs={blogs}/>);
            res.render('index', {entry: body, blogs: blogs});
        });
    })
    .post(function(req, res) {
        console.log(req);
        BlogModel.create({
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
app.listen(3000);
console.log('Serving at http://localhost:3000');
