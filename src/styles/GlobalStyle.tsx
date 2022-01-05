import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-break: keep-all;
    word-wrap: break-word;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
