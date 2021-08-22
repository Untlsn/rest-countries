import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-size: min(1vw, 1vh);
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    color: inherit;
    &:hover { cursor: pointer }
  }
`;
