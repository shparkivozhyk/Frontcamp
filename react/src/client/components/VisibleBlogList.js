import React from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';
import BlogList from './BlogList';
import rootReducer from '../redux/reducers/rootReducer';

const getVisibleBlogs = (state, filter) => {
    // console.log(filter);
    // if (filter === '') {
    //     return state
    // }
    // else {
    //     var filteredState = state.filter(item => item.author === filter);
    //     console.log(filteredState);
    //     return filteredState;
    // }
    return state;
}

const mapStateToProps = state => ({
    blogs: getVisibleBlogs(state.blogs),
    filter: state.filter
})

export default connect(mapStateToProps)(BlogList)