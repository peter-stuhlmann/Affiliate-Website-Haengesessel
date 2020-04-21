import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import StaticPage from './pages/StaticPage';
import LegalNotice from './pages/LegalNotice';
import Contact from './pages/Contact';
import BuyingAdvice from './pages/BuyingAdvice';
import NotFound from './pages/NotFound';
import { ga } from '../helper/analytics';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Home)} />
      <Route exact path="/datenschutzerklaerung" component={ga(StaticPage)} />
      <Route exact path="/zubehoer" component={ga(Equipment)} />
      <Route exact path="/impressum" component={ga(LegalNotice)} />
      <Route exact path="/haengesessel" render={() => <Redirect to="/" />} />
      <Route exact path="/kaufberatung" component={ga(BuyingAdvice)} />
      <Route exact path="/kontakt" component={ga(Contact)} />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
