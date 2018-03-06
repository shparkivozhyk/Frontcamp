import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.clicker = this.clicker.bind(this);
        console.log(props);
        this.state = {
            blog: props.blog,
            clicks: props.clicks
        };
    }
    clicker() {
        console.log('yeeeeah');
    }
    render() {
        return (<div>
            <h3>this.state.blog.title</h3>
            <p>this.state.blog.body</p>
        </div>);
    }
}

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: props.blogs
        };
        this.eachBlog = this.eachBlog.bind(this);
        this.click = this.click.bind(this);
    }
    click() {
        console.log('yeeeeah');
    }
    eachBlog(item) {
        return (<div onClick={this.click}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>);
    }
    render() {
        return (<div>
            <h1>All blogs</h1>
            {this.state.blogs.map(this.eachBlog)}
        </div>)
    }
}


export default Blogs;
