/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { apolloClient } from '../../utils/apolloClient';
import { LocaleContextProvider } from '../../contexts/localeContext/localeContext';
import { theme } from '../../utils/theme';
import { IntlProvider } from './IntlProvider/IntlProvider';
import { ProvidersProps } from './Providers.types';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

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
