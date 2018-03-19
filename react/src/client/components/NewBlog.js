import React from 'react';
import axios from 'axios';

class NewBlog extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.formSubmit = this.formSubmit.bind(this);
        console.log(props);
    }
    formSubmit(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/blogs',
            data: {
                title: this.title.value,
                author: 'Unknown',
                body: this.body.value
            }
        });
    }
    render() {
        return (<div>
            <form onSubmit={this.props.formSubmit}>
                <input type="text" ref={(input) => this.title= input} placeholder="blog title"/>
                <input type="text" ref={(input) => this.body = input} placeholder="blog text"/>
                <button type="submit">Create new blog</button>
            </form>
        </div>)
    }
}

export default NewBlog;