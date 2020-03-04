import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function PrivacyPolicy() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <h1>{text.privacyPolicy.heading}</h1>

        {text.privacyPolicy.content.map(content => (
          <Fragment key={content.heading}>
            <h2>{content.heading}</h2>
            {content.text.map(text => (
              <p
                key={text}
                dangerouslySetInnerHTML={{
                  __html: text,
                }}
              />
            ))}
          </Fragment>
        ))}
        <p>{text.privacyPolicy.source}</p>
      </Main>
    </Wrapper>
  );
}
