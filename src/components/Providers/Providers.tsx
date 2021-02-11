/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { apolloClient } from '~/apolloClient';
import { LocaleContextProvider } from '~/contexts/localeContext/localeContext';
import { theme } from '~/theme';
import { GlobalStyles } from '~/components/App/App.styles';
import { IntlProvider } from './IntlProvider/IntlProvider';
import { ProvidersProps } from './Providers.types';

export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <LocaleContextProvider>
        <Router>
          <IntlProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </IntlProvider>
        </Router>
      </LocaleContextProvider>
    </ApolloProvider>
  </StrictMode>
);
