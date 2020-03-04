import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { Header, Wrapper, Logo } from './StyledComponents';

export default function HeaderComponent() {
  const { text } = useContext(Context);

  return (
    <Header>
      <Wrapper>
        <Logo>
          <Link to="/">
            <p className="site-title">{text.siteTitle}</p>
          </Link>
          <p className="site-description">{text.siteDescription}</p>
        </Logo>
      </Wrapper>
    </Header>
  );
}
