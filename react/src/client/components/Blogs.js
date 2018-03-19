import React from 'react';
import Blog from './Blog';
import NewBlog from './NewBlog';

const Blogs = ({store}) => {
    const blogs = store.getState()
    return (<div>
        <h1 onClick={() => store.dispatch({type: 'CLICK'})}>Blogs</h1>
        {blogs.map((blog) => <Blog key={blog._id} blog={blog}/>)}
    </div>);
};

export default Blogs;