import React, { Fragment } from 'react';
import styled from 'styled-components';

const Stars = (props) => {
  const { color, rating, size } = props;

  const rounded = Math.round(rating);
  let starRating = ['0', '0', '0', '0', '0'];

  for (let i = 0; i < rounded; i++) {
    starRating[i] = '1';
  }

  let value = starRating.join('');
  let result;

  switch (value) {
    case '10000':
      result = (
        <Fragment>
          <Star color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
        </Fragment>
      );
      break;
    case '11000':
      result = (
        <Fragment>
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
        </Fragment>
      );
      break;
    case '11100':
      result = (
        <Fragment>
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
        </Fragment>
      );
      break;
    case '11110':
      result = (
        <Fragment>
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <EmptyStar color={color} size={size} />
        </Fragment>
      );
      break;
    case '11111':
      result = (
        <Fragment>
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
          <Star color={color} size={size} />
        </Fragment>
      );
      break;
    default:
      result = (
        <Fragment>
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
          <EmptyStar color={color} size={size} />
        </Fragment>
      );
  }

  return result;
};

export default Stars;

const Star = (props) => {
  const { color, size } = props;

  return (
    <StyledStar
      color={color}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </StyledStar>
  );
};

const EmptyStar = (props) => {
  const { color, size } = props;

  return (
    <StyledStar
      color={color}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z" />
    </StyledStar>
  );
};

const StyledStar = styled.svg`
  fill: ${(props) => props.color || '#ffbb00'};
  width: ${(props) => props.size || '20px'};
`;
