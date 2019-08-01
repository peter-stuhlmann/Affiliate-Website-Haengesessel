import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 25px 15px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  box-sizing: border-box
`;
export const Wrapper = (props) => <StyledWrapper {...props} />

const StyledHeader = styled.header`
  background-color: #9C4808;
  margin: 0;
  width: 100%
`;
export const Header = (props) => <StyledHeader {...props} />

const StyledLogo = styled.div`
  line-height: 1.2;
  margin: 40px 15px;
  text-shadow: 2px 2px 2px #000;
  text-align: left;

  a {
      text-decoration: none
  }

  .site-title {
    font-size: 3em;
    letter-spacing: inherit;
    font-family: 'Verdana',sans-serif;
    font-weight: 700;
    margin: 0;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none
  }

  .site-description {
    color: #fff;
    font-size: 1.3em;
    margin: 10px 0 0;
    font-family: 'Viga',sans-serif
  }
`;
export const Logo = (props) => <StyledLogo {...props} />

const StyledFooter = styled.footer`
  background-color: #9C4808;
  color: #fff;
  line-height: 1.6;
  margin-top: 30px;
  width: 100%
`;
export const Footer = (props) => <StyledFooter {...props} />

const StyledFooterNav = styled.nav`
  display: inline-block;
  margin: 0 20px;
  text-align: center;
  float: right;
        
  ul {
    margin: 0 0 14px 30px;
    padding: 0;

    li {
      display: inline;
      font-size: 1em;
      margin-left: 25px;
      white-space: nowrap;

      a {
        color: #fff;
        text-decoration: none;
        transition: 0.3s ease all;

        &:hover {
          opacity: 0.8
        }
      }
    }
  }
`;
export const FooterNav = (props) => <StyledFooterNav {...props} />

const StyledCopyright = styled.p`
  margin: 0;
  padding: 0 15px;
  display: inline-block;

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s ease all;
    
    &:hover {
      opacity: 0.8
    }
  }
`;
export const Copyright = (props) => <StyledCopyright {...props} />