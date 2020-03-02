import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './StyledComponents';
import HeaderComponent from './Header';
import MainNavigation from './MainNavigation';
import HomeComponent from './Home';
import NotFound from './NotFound';
import FooterComponent from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import LegalNotice from './LegalNotice';
import ContextProvider from '../Context';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />

        <HeaderComponent />
        <MainNavigation />

        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route
            exact
            path="/datenschutzerklaerung"
            component={PrivacyPolicy}
          />
          <Route exact path="/impressum" component={LegalNotice} />
          <Route component={NotFound} />
        </Switch>

        <FooterComponent />
      </BrowserRouter>
    </ContextProvider>
  );
}
