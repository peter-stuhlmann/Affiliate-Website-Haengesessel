import React, { Fragment, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Context } from '../Context';
import Home from './pages/Home';
import StaticPage from './pages/StaticPage';
import NotFound from './pages/NotFound';
import { ShareButtons } from './Share';

export default function Router(props) {
  const { text } = useContext(Context);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/datenschutzerklaerung"
        render={() => <StaticPage content={text.privacyPolicy} />}
      />
      <Route
        exact
        path="/impressum"
        render={() => <StaticPage content={text.legalNotice} />}
      />
      <Route
        exact
        path="/kaufberatung"
        render={() => (
          <Fragment>
            <StaticPage content={text.buyingAdvice} />
            <ShareButtons />
          </Fragment>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
