import React, { useContext } from 'react';

import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { Main } from '../Main';
import Sidebar from '../Sidebar';

export default function Equipment() {
  const { text } = useContext(Context);

  document.title = text.equipment.meta.title;
  meta('name', 'description', text.equipment.meta.description);

  return (
    <Wrapper>
      <Main>
        <h1>{text.equipment.heading}</h1>

        <ul>
          {text.equipment.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Main>
      <Sidebar />
    </Wrapper>
  );
}
