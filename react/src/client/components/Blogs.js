import React from 'react';
import Blog from './Blog';
import NewBlog from './NewBlog';
import BlogList from './BlogList';
import VisibleBlogList from './VisibleBlogList';
import {postBlogs} from '../redux/reducers/rootReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Blogs = ({store}) => {
    const blogs = store.getState();
    return (<div>

        <VisibleBlogList/>
        <NewBlog/>
    </div>);
};


export default Blogs;
