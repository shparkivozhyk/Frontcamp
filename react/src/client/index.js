import React from 'react';
import { render, hydrate } from 'react-dom';
import Blogs from './components/Blogs';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

hydrate(<Blogs blogs={window.__PRELOADED_STATE__} />, document.getElementById('app'));