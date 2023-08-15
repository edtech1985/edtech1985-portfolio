import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace, sans-serif;
  }
  
  body {
    margin: 0;
    width: 97vw;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--bg-green);
    
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
      max-height: 100vh;
    }
  }

:root {
  --dark: #000;
  --light-green: #00e700;
  --dark-green: #008000;
  --bg-green: #c4ffc4 ;
}
  
`;

export default GlobalStyle;
