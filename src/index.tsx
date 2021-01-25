/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App/App';
import { GlobalStyles } from './components/App/App.styles';
import { renderer } from './renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleContextProvider } from './contexts/localeContext';
import { theme } from './theme';

const appElement = document.querySelector('main');

renderer(
  <StrictMode>
    <LocaleContextProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Router>
    </LocaleContextProvider>
  </StrictMode>,
  appElement
);

window.addEventListener('load', () => {
  appElement.classList.add('loaded');
});
