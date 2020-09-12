import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './style';
import { App } from './components/App/App';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('body')
);
