import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {Provider, connect} from 'react-redux';

import Blogs from './components/Blogs';
import Blog from './components/Blog';
import User from './components/User'

const App = ({store}) => {
  return (
      <Switch>
        <Route path="/blogs" render={() => <Blogs store={store}/>}/>
        <Route path="/login" component={User} />
      </Switch>
  )};

export default App;