import React from 'react';
import { render, hydrate } from 'react-dom';
import Blogs from './Blogs';

hydrate(<Blogs {...blogs}/>, document.getElementById('app'));
