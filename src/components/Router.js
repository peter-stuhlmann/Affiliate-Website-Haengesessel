import React, { Fragment, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../Context';
import Home from './pages/Home';
import StaticPage from './pages/StaticPage';
import NotFound from './pages/NotFound';
import { ShareButtons } from './Share';

export default function Router() {
  const { text } = useContext(Context);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/datenschutzerklaerung"
        render={() => (
          <StaticPage
            content={text.privacyPolicy.content}
            title={text.privacyPolicy.meta.title}
            description={text.privacyPolicy.meta.decription}
          />
        )}
      />
      <Route
        exact
        path="/impressum"
        render={() => (
          <StaticPage
            content={text.legalNotice.content}
            title={text.legalNotice.meta.title}
            description={text.legalNotice.meta.decription}
          />
        )}
      />
      <Route exact path="/haengesessel" render={() => <Redirect to="/" />} />
      <Route
        exact
        path="/kaufberatung"
        render={() => (
          <Fragment>
            <StaticPage
              content={text.buyingAdvice.content}
              title={text.buyingAdvice.meta.title}
              description={text.buyingAdvice.meta.decription}
            />
            <ShareButtons />
          </Fragment>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
