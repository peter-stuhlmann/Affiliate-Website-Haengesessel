import React, { useContext } from 'react';

import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { Main } from '../Main';
import Sidebar from '../Sidebar';
import { ShareButtons } from '../Share';

export default function Equipment() {
  const { text } = useContext(Context);

  document.title = text.equipment.meta.title;
  meta('name', 'description', text.equipment.meta.description);

  document.getElementsByTagName('title')[0] = 'Hallo';
  return (
    <Wrapper>
      <Main>
        <h1>{text.equipment.heading}</h1>
        <p>{document.title}</p>
        <ul>
          {text.equipment.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ShareButtons />
      </Main>
      <Sidebar />
    </Wrapper>
  );
}
