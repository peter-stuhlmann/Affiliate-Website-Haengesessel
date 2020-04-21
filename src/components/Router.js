import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ga } from '../helper/analytics';
import { Wrapper } from './Wrapper';

const Home = lazy(() => import('./pages/Home'));
const BuyingAdvice = lazy(() => import('./pages/BuyingAdvice'));
const Equipment = lazy(() => import('./pages/Equipment'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const StaticPage = lazy(() => import('./pages/StaticPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function Router() {
  return (
    <Suspense fallback={<Wrapper>Inhalt wird geladen...</Wrapper>}>
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
    </Suspense>
  );
}
