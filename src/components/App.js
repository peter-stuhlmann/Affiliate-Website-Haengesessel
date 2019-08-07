import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/scss/main.scss';
import HeaderComponent from './Header';
import MainNavigation from './MainNavigation';
import HomeComponent from './Home';
import NotFound from './NotFound';
import FooterComponent from './Footer';
import PrivacyPolicy from './PrivacyPolicy';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>

        <HeaderComponent />
        <MainNavigation />

        <Switch>
          <Route exact path="/" component={ HomeComponent } />
          <Route exact path="/datenschutzerklaerung" component={ PrivacyPolicy } />
          <Route component={ NotFound } />
        </Switch>
        
        <FooterComponent />
      
      </BrowserRouter>
    )
  }

}
