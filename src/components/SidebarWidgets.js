import React, { Component } from 'react';

export class TextWidget extends Component {

    render() {
      return (
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      );
    }

}

export class ImageWidget extends Component {

    render() {
      return (
        <img src="https://via.placeholder.com/250x150" alt="Lorem ipsum" />
      );
    }

}