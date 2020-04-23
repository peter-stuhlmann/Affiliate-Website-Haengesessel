import { createGlobalStyle } from 'styled-components';

import LoraRegular from '../assets/fonts/lora/LoraRegular.ttf';
import VigaRegular from '../assets/fonts/viga/VigaRegular.ttf';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegular});
    font-display: block;
  }

  @font-face {
    font-family: 'Viga';
    src: url(${VigaRegular});
    font-display: block;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Lora', serif;
    font-size: 18px;

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Viga', sans-serif;
      font-weight: normal;
    }

    h1 {
      font-size: 2em;
    }

    hr {
      width: 100%;
      border: 0;
      height: 1px;
      background: #ccc;
    }
  }

  // scrollbar
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9c4808 ;
    border-radius: 3px;
  }
`;
