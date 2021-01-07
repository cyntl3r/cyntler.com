import React, { ReactElement } from 'react';
import { render, hydrate } from 'react-dom';
import { GlobalStyle } from './style';
import { App } from './components/App/App';

const renderer = (element: ReactElement) => {
  const appElement = document.querySelector('div');
  if (appElement.hasChildNodes()) {
    hydrate(element, appElement);
  } else {
    render(element, appElement);
  }
};

renderer(
  <>
    <GlobalStyle />
    <App />
  </>
);
