import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
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
  margin: 40px 0;
  text-shadow: 2px 2px 2px #000;
  text-align: left;

  a {
      text-decoration: none
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
    text-decoration: none
  }

  .site-description {
    color: #fff;
    font-size: 1.3em;
    margin: 10px 0 0;
    font-family: 'Open Sans', sans-serif
  }
`;
export const Logo = (props) => <StyledLogo {...props} />

const StyledMainNavigation = styled.div`
  margin: 0;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  display: inline-block;
  width: 100%;
  background-color: #9C4808;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.6);
  font-family: 'Open Sans', sans-serif;

  nav {
    display: inline-block;
    vertical-align: middle;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline-block;
        margin-right: 25px;

        a {
          text-decoration: none;
          transition: .3s ease all;
          color: #fff
        }
      }
    }
  }
`;
export const MainNavigation = (props) => <StyledMainNavigation {...props} />

const StyledMain = styled.section`
  flex: 0 0 74%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,.2);

  p {
      line-height: 1.6;
      text-align: justify
  }
`;
export const Main = (props) => <StyledMain {...props} />

const StyledSidebar = styled.aside`
  flex: 0 0 25%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,.2);

  p {
    line-height: 1.6;
    text-align: justify
  }

  img {
      max-width: 100%
  }
`;
export const Sidebar = (props) => <StyledSidebar {...props} />

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
  text-align: center;
  float: right;
        
  ul {
    margin: 0;
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