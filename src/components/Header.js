import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context';
import { Wrapper } from './Wrapper';

export default function HeaderComponent() {
  const { text } = useContext(Context);

  return (
    <Header>
      <Wrapper backgroundColor="transparent" marginX="0 auto" paddingX="15px">
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

const Header = styled.header`
  background-color: #9c4808;
  margin: 0;
  width: 100%;
`;

const Logo = styled.div`
  line-height: 1.2;
  margin: 40px 0;
  text-shadow: 2px 2px 2px #000;
  text-align: left;

  a {
    text-decoration: none;
  }

  .site-title {
    font-size: 3em;
    letter-spacing: inherit;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin: 0;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;

    @media screen and (max-width: 480px) {
      font-size: 2em;
    }
  }

  .site-description {
    color: #fff;
    font-size: 1.3em;
    margin: 10px 0 0;
    font-family: 'Open Sans', sans-serif;
  }
`;
