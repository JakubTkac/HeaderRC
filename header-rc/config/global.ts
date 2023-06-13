import { createGlobalStyle } from "styled-components";
import { COLOR } from "../Theme";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline:0;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline:0;
    background-color: ${COLOR.BACKGROUND};
  }
`;

export default GlobalStyle;
