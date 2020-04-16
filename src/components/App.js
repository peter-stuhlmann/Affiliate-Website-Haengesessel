import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './StyledComponents';
import HeaderComponent from './Header';
import MainNavigation from './HeaderNavigation/MainNavigation';
import FooterComponent from './Footer';
import ContextProvider from '../Context';
import Router from './Router';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <HeaderComponent />
        <MainNavigation />
        <Router />
        <FooterComponent />
      </BrowserRouter>
    </ContextProvider>
  );
}
