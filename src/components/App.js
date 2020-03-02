import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      products: {},
    };
  }

  productsFetch() {
    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        this.setState(state => {
          state.products = products;
          return state;
        });
      });
  }

  componentDidMount() {
    this.productsFetch();
  }

  render() {
    return (
      <ContextProvider>
        <BrowserRouter>
          <GlobalStyles />

          <HeaderComponent />
          <MainNavigation />

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomeComponent {...props} products={this.state.products} />
              )}
            />
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
}
