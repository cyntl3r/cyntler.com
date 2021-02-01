/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, useContext } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { LocaleContext } from '../../contexts/localeContext/localeContext';
import { IntlProviderProps } from './IntlProvider.types';

export const IntlProvider: FunctionComponent<IntlProviderProps> = ({
  children,
}) => {
  const { currentLocale, localeMessages } = useContext(LocaleContext);

  return (
    <ReactIntlProvider locale={currentLocale} messages={localeMessages}>
      {children}
    </ReactIntlProvider>
  );
};
