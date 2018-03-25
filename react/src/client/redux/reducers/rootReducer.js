 import axios from 'axios';

const rootReducer = (state = {}, action) => {
        switch (action.type) {
            case 'POST_BLOG': 
                let updatedBlogs = [...state.blogs, action.payload.data];
                return Object.assign({}, {blogs: updatedBlogs}, {filter: state.filter});
            case 'GET_BLOGS': 
                return state;
            case 'FILTER_AUTHOR': 
                return Object.assign(state, {filter: action.payload});;
            default: return state;
        }
    };

export default  rootReducer;