import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';

const Filter = ({dispatch}) => {
    let author;
    return (<form onSubmit= {(e) => {
        e.preventDefault();
        dispatch({type: 'FILTER_AUTHOR', payload: author.value});
    }}>
        <input type="text" placeholder="find by author" ref={input => author = input}/>
        <button type="submit">Filter</button>
    </form>);
}

export default connect()(Filter);