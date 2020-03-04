import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { MainNavigation, Wrapper } from './StyledComponents';

export default function HeaderComponent() {
  const { text } = useContext(Context);

  return (
    <MainNavigation>
      <Wrapper>
        <nav>
          <ul>
            {text.headerNavigation.map(nav => (
              <li key={nav.title}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </MainNavigation>
  );
}
