import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';

const postNewblog = (input) => {
    return axios.post('/blogs', {
        title: input.title,
        body: input.body,
        author: 'Unknown'
    })
}

const postBlogs = function(input) {
    return (dispatch) => {  
            postNewblog(input).then(resp => {
                dispatch({type: 'POST_BLOG', payload: resp});
            }).catch(err => {
                console.log(err);
            })
    }
};

const NewBlog = ({dispatch}) => {
    let title, body;
    return (<div>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(postBlogs({
                title: title.value,
                body: body.value
            }));
        }}>
            <input type="text" placeholder="blog title" ref={input => title = input}/>
            <input type="text" placeholder="blog text" ref={input => body = input}/>
            <button type="submit">Create new blog</button>
        </form>
    </div>);
}

export default connect()(NewBlog);