import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {Provider, connect} from 'react-redux';

import Blogs from './components/Blogs';
import Blog from './components/Blog';

const App = ({store}) => {
  const initialState = store.getState();
  return (
      <Switch>
        <Route path="/blogs" render={() => <Blogs store={store}/>}/>
        <Route path="/noblogs" component={Blogs} />
      </Switch>
  )};

export default App;