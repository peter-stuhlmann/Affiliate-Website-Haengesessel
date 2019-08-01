import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../assets/scss/main.scss';
import FooterComponent from './Footer';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>

        Hello World!
        
        <FooterComponent />
      
      </BrowserRouter>
    )
  }

}
