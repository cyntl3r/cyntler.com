/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, main {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #ffffff;
  }

  main {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
    &.loaded {
      opacity: 1;
      visibility: visible;
    }
  }
`;
