import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Wrapper, Logo } from './StyledComponents';

export default function HeaderComponent() {
  return (
    <Header>
      <Wrapper>
        <Logo>
          <Link to="/">
            <p className="site-title">Lorem ipsum</p>
          </Link>
          <p className="site-description">Lorem ipsum dolor sit amet</p>
        </Logo>
      </Wrapper>
    </Header>
  );
}
