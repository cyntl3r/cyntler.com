import React from 'react';
import { render, hydrate } from 'react-dom';
import { GlobalStyle } from './style';
import { App } from './components/App/App';

const appElement = document.querySelector('div');

const renderApp = (
  <>
    <GlobalStyle />
    <App />
  </>
);

if (appElement.hasChildNodes()) {
  hydrate(renderApp, appElement);
} else {
  render(renderApp, appElement);
}
