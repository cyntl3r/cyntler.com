/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, main {
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

export const PaddingWrapper = styled.div`
  padding: 1rem;
`;
