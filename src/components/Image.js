import React from 'react';
import styled from 'styled-components';

export const LinkedImage = (props) => {
  const { alt, caption, href, source, src, title, width } = props;

  return (
    <StyledImage>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          title={title}
          alt={alt}
          loading="lazy"
          style={{ maxWidth: width }}
        />
      </a>
      <p>
        {caption}
        <span>{source}</span>
      </p>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  img {
    width: 100%;
  }

  span {
    font-size: 0.8em;
    font-style: italic;
    margin-left: 5px;
  }
`;
