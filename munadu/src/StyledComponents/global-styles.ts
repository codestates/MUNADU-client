import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// font-family: 'Noto Sans KR', sans-serif;
//     font-family: 'Roboto', sans-serif;
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html{
    min-height:100%;
    position:relative;
  }

  body {
    overflow: hidden;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
