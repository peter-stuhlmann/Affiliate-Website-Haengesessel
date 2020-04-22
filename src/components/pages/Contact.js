import React, { useContext } from 'react';

import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { Main } from '../Main';
import { ShareButtons } from '../Share';

export default function Contact() {
  const { text } = useContext(Context);

  document.title = text.contact.meta.title;
  meta('name', 'description', text.contact.meta.description);

  return (
    <Wrapper>
      <Main flex="0 0 100%">
        <h1>{text.contact.heading}</h1>

        {text.contact.content.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <p>
          {text.contact.mail.description}
          <a href={text.contact.mail.href}>{text.contact.mail.linkText}</a>
        </p>
        <ShareButtons />
      </Main>
    </Wrapper>
  );
}
