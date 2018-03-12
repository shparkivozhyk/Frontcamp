import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Blogs from './components/Blogs';
import Blog from './components/Blog';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/blogs" component={Blogs} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;