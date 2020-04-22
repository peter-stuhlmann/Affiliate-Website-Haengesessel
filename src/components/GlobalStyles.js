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

  body {
    margin: 0;
    font-family: 'Lora', serif;
    font-size: 18px;

    main {
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,.2);
      padding: 12px;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Viga', sans-serif;
      font-weight: normal;
    }

    h1 {
      font-size: 2em;
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
