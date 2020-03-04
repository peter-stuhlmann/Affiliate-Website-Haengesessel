import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './StyledComponents';
import HeaderComponent from './Header';
import MainNavigation from './MainNavigation';
import StaticPage from './StaticPage';
import NotFound from './NotFound';
import FooterComponent from './Footer';
import ContextProvider from '../Context';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />

        <HeaderComponent />
        <MainNavigation />

        <Switch>
          <Route exact path="/" component={StaticPage} />
          <Route exact path="/datenschutzerklaerung" component={StaticPage} />
          <Route exact path="/impressum" component={StaticPage} />
          <Route component={NotFound} />
        </Switch>

        <FooterComponent />
      </BrowserRouter>
    </ContextProvider>
  );
}
