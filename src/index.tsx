/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { GlobalStyles } from './globalStyles';
import { App } from './components/App/App';
import { renderer } from './renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode, Suspense } from 'react';

const appElement = document.querySelector('main');

renderer(
  <StrictMode>
    <Suspense fallback={<div />}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </Suspense>
  </StrictMode>,
  appElement
);

window.addEventListener('load', () => {
  appElement.classList.add('loaded');
});
