import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../assets/scss/main.scss';
import HeaderComponent from './Header';
import MainNavigation from './MainNavigation';
import FooterComponent from './Footer';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>

        <HeaderComponent />
        <MainNavigation />

        Hello World!
        
        <FooterComponent />
      
      </BrowserRouter>
    )
  }

}
