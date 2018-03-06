import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Blogs from './client/Blogs';

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.set('views', './src/client/views');
app.set('view engine', 'pug');
const BlogModel = require('../models/Blog');
const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');

app.get('/blogs', (req, res) => {

    BlogModel.find(function(err, blogs) {
        if (err) {
            res.send(err.message);
        };
        const body = renderToString(<Blogs blogs={blogs}/>); // <-- collecting styles
        const title = 'Server side Rendering with Styled Components';

        res.render('index', {entry: body})
    });
});

app.listen(3000);
console.log('Serving at http://localhost:3000');
