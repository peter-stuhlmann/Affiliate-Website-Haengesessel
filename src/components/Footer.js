import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { Wrapper, Footer, Copyright, FooterNav } from './StyledComponents';

export default function FooterComponent() {
  const { text } = useContext(Context);

  return (
    <Footer>
      <Wrapper>
        <Copyright>
          &copy; <a href={text.copyright.path}>{text.copyright.title}</a>,{' '}
          {text.copyright.year}
        </Copyright>
        <FooterNav>
          <ul>
            {text.footerNavigation.map(nav => (
              <li key={nav.title}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </FooterNav>
      </Wrapper>
    </Footer>
  );
}
