import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        const {title, body, author} = props.blog;
        const date = new Date(props.blog.date).toDateString();

        this.state = {
            title, body, author, date
        }
    }
    render() {
        return (<div>
            <h3>{this.state.title}</h3>
            <h4>{this.state.author}</h4>
            <p>{this.state.body}</p>
            <p>{this.state.date}</p>
        </div>);
    }
}

export default Blog;