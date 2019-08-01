import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Footer, Copyright, FooterNav } from './StyledComponents';


export default class FooterComponent extends Component {

    render() {

      return (
        <Footer>
          <Wrapper>
            <Copyright>&copy; <a href="https://peter-stuhlmann.de/">Peter R. Stuhlmann</a>, 2019</Copyright>
            <FooterNav>
              <ul>
                <li><Link to="/impressum">Impressum</Link></li>
                <li><Link to="/datenschutzerklaerung">Datenschutzerklärung</Link></li>
              </ul>
            </FooterNav>
          </Wrapper>
        </Footer>
      );
    }

}