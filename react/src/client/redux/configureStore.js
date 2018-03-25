import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
    return store;
}

export default configureStore;