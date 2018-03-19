import React from 'react';
import { render, hydrate } from 'react-dom';
import Blogs from './components/Blogs';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import configureStore from './redux/configureStore';
import App from './App';

const store = configureStore(window.__PRELOADED_STATE__);



hydrate(<Provider store={store}>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </Provider>, document.getElementById('react-app'));