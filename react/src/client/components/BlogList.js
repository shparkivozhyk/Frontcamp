import React from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';

const BlogList = ({blogs}) => {
    return (<div>
        {blogs.map((blog) => <Blog key={blog._id} blog={blog}/>)}
    </div>);
}

export default connect()(BlogList);
