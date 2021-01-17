/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { GlobalStyles } from './globalStyles';
import { App } from './components/App/App';
import { renderer } from './renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { LocaleContextProvider } from './contexts/localeContext';

const appElement = document.querySelector('main');

renderer(
  <StrictMode>
    <LocaleContextProvider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </LocaleContextProvider>
  </StrictMode>,
  appElement
);

window.addEventListener('load', () => {
  appElement.classList.add('loaded');
});
