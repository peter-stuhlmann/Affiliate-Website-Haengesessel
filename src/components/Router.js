import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import StaticPage from './pages/StaticPage';
import LegalNotice from './pages/LegalNotice';
import NotFound from './pages/NotFound';
import { ga } from '../helper/analytics';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Home)} />
      <Route exact path="/datenschutzerklaerung" component={ga(StaticPage)} />
      <Route exact path="/impressum" component={ga(LegalNotice)} />
      <Route exact path="/haengesessel" render={() => <Redirect to="/" />} />
      <Route exact path="/kaufberatung" component={ga(StaticPage)} />
      <Route exact path="/kontakt" component={ga(StaticPage)} />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
