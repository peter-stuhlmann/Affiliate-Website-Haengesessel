import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Main, Sidebar } from './StyledComponents';
import { TextWidget, ImageWidget } from './SidebarWidgets';

export default class HeaderComponent extends Component {

    render() {
      return (
        <Wrapper>
          <Main>
            <h1>Error 404</h1>
            <p>Sorry, diese Seite ist leider nicht (mehr) verfügbar.</p>
            <Link to="/">Home</Link>
          </Main>
          <Sidebar>
              <TextWidget />
              <ImageWidget />
          </Sidebar>
        </Wrapper>
      );
    }

}