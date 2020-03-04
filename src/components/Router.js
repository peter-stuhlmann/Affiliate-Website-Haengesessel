import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import StaticPage from './StaticPage';
import NotFound from './NotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/datenschutzerklaerung" component={StaticPage} />
      <Route exact path="/impressum" component={StaticPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
