import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './style';
import { App } from './components/App/App';

const appElement = document.createElement('div');
document.querySelector('body').appendChild(appElement);

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  appElement
);
