 import axios from 'axios';


const postBlogs = (dispatch) => {
    dispatch({type: 'CLICK'})
}

const rootReducer = (state = [], action) => {
        switch (action.type) {
            case 'POST_BLOG': 
                return [...state, action.payload.data];
            case 'GET_BLOGS': 
                return state;
            default: return state;
        }
    };

export default  rootReducer;