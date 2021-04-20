/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { LocaleContextProvider } from '../../contexts/localeContext/localeContext';
import { theme } from '../../utils/theme';
import { IntlProvider } from './IntlProvider/IntlProvider';
import { ProvidersProps } from './Providers.types';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <StrictMode>
    <LocaleContextProvider>
      <HelmetProvider>
        <Router>
          <IntlProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </IntlProvider>
        </Router>
      </HelmetProvider>
    </LocaleContextProvider>
  </StrictMode>
);
