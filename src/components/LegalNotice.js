import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function LegalNotice() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <h1>{text.legalNotice.heading}</h1>

        {text.legalNotice.content.map(content => (
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
        <p>{text.legalNotice.source}</p>
      </Main>
    </Wrapper>
  );
}
