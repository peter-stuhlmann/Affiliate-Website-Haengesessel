import React, { Fragment, useContext } from 'react';

import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { Main } from '../Main';

export default function LegalNotice() {
  const { text } = useContext(Context);

  document.title = text.legalNotice.meta.title;
  meta('name', 'description', text.legalNotice.meta.description);

  return (
    <Wrapper>
      <Main flex="0 0 100%">
        <h1>{text.legalNotice.heading}</h1>

        {text.legalNotice.content.map((text) => (
          <Fragment key={text.heading}>
            <h2>{text.heading}</h2>
            {text.text.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Fragment>
        ))}
        <p>{text.legalNotice.source}</p>
      </Main>
    </Wrapper>
  );
}
