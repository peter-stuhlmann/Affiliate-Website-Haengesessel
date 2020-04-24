import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { Button } from './Buttons';
import Stars from './Stars';

export default function Sidebar() {
  const { text } = useContext(Context);

  return (
    <StyledSidebar>
      {text.sidebar.map((widget) => (
        <Fragment key={widget.heading}>
          <h2>{widget.heading}</h2>
          {widget.content.map((paragraph) => (
            <section key={paragraph.heading}>
              <h3>{paragraph.heading}</h3>
              {paragraph.img ? (
                <a
                  href={paragraph.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={paragraph.img.src}
                    alt={paragraph.img.alt}
                    loading="lazy"
                  />
                </a>
              ) : null}
              {paragraph.rating ? (
                <p title={paragraph.rating.date}>
                  <Stars rating={paragraph.rating.stars} />
                  <br />
                  {paragraph.rating.stars} / 5 {text.products.rating.pre}
                  {paragraph.rating.amount} {text.products.rating.suf}
                </p>
              ) : null}
              {paragraph.link ? (
                <Button
                  href={paragraph.link.href}
                  linkText={text.buttons.affiliate.linkText}
                />
              ) : null}
            </section>
          ))}
          <hr />
        </Fragment>
      ))}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  background-color: ${(props) => props.backgroundColor || '#fff'};
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
  box-shadow: ${(props) =>
    props.boxShadow || '5px 5px 10px 0px rgba(0, 0, 0, 0.2)'};
  color: ${(props) => props.color || '#505050'};
  flex: ${(props) => props.display || '0 0 26%'};
  line-height: ${(props) => props.lineHeight || '1.6'};
  margin: ${(props) => props.marginX || '30px 0 0 0'};
  max-width: ${(props) => props.maxWidth || '1170px'};
  padding: ${(props) => props.paddingX || '15px'};

  img {
    @media (min-width: 901px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`;
