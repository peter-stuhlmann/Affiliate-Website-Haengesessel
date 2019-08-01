import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation, Wrapper } from './StyledComponents';

export default class HeaderComponent extends Component {

    render() {
      return (
        <MainNavigation>
          <Wrapper>
            <nav>
                <ul>
                  <li><Link to="#">Lorem ipsum</Link></li>
                  <li><Link to="#">Lorem ipsum</Link></li>
                  <li><Link to="#">Lorem ipsum</Link></li>
                  <li><Link to="#">Lorem ipsum</Link></li>
                </ul>
            </nav>
          </Wrapper>
        </MainNavigation>
      );
    }

}