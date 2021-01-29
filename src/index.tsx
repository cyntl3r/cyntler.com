/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App/App';
import { GlobalStyles } from './components/App/App.styles';
import { renderer } from './utils/renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleContextProvider } from './contexts/localeContext/localeContext';
import { theme } from './theme';
import { IntlProvider } from './components/IntlProvider/IntlProvider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient';

const appElement = document.querySelector('main');

renderer(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <LocaleContextProvider>
        <Router>
          <IntlProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <App />
            </ThemeProvider>
          </IntlProvider>
        </Router>
      </LocaleContextProvider>
    </ApolloProvider>
  </StrictMode>,
  appElement
);

window.addEventListener('load', () => {
  appElement.classList.add('loaded');
});
