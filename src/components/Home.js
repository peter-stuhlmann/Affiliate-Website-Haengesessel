import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { Wrapper } from './StyledComponents';

export default function HomeComponent() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <h1>{text.home.heading}</h1>

      {text.home.content.map(home => (
        <Fragment key={home.heading}>
          <h2>{home.heading}</h2>
          {home.text.map(text => (
            <p key={text}>{text}</p>
          ))}
        </Fragment>
      ))}
    </Wrapper>
  );
}
