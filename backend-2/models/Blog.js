const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    blog_id: Number
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog