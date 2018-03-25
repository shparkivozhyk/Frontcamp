import React from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';
import BlogList from './BlogList';
import rootReducer from '../redux/reducers/rootReducer';

const getVisibleBlogs = (state, filter) => {
    return state;
}

const mapStateToProps = state => ({
    blogs: state
})

export default connect(mapStateToProps)(BlogList)