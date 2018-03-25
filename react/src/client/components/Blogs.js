import React from 'react';
import Blog from './Blog';
import NewBlog from './NewBlog';
import BlogList from './BlogList';
import VisibleBlogList from './VisibleBlogList';
import Filter from './Filter';

const Blogs = ({store}) => {
    return (<div>
        <Filter/>
        <VisibleBlogList/>
        <NewBlog/>
    </div>);
};


export default Blogs;
