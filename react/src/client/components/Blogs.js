import React from 'react';
import Blog from './Blog';
import NewBlog from './NewBlog';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: props.blogs
        };
        this.clicker = this.clicker.bind(this);
    }
    componentDidMount() {
        alert('Mounted!');
    }
    clicker() {
        console.log('click!!!');
    }
    render() {
        return (<div>
            <h1 onClick={this.clicker}>All blogs</h1>
            {this.state.blogs.map((blog) => <Blog key={blog._id} blog={blog}/>)}
            <NewBlog/>
        </div>)
    }
}


export default Blogs;