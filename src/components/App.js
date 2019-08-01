import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/scss/main.scss';
import HeaderComponent from './Header';
import MainNavigation from './MainNavigation';
import NotFound from './NotFound';
import FooterComponent from './Footer';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>

        <HeaderComponent />
        <MainNavigation />

        <Switch>
          <Route component={ NotFound } />
        </Switch>
        
        <FooterComponent />
      
      </BrowserRouter>
    )
  }

}
