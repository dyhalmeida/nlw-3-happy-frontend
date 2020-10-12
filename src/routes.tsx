import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
