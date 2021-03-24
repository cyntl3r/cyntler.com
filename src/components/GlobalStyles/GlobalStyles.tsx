/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html,
  body,
  main {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme?.colors?.white};
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;
