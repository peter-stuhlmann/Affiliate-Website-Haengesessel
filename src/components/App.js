import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../assets/scss/main.scss';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>

        <HeaderComponent />

        Hello World!
        
        <FooterComponent />
      
      </BrowserRouter>
    )
  }

}
