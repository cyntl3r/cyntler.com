/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { createContext, FunctionComponent, useMemo, useState } from 'react';
import {
  LocaleContextInterface,
  LocaleContextProviderProps,
  LocaleType,
} from './localeContext.types';
import { LOCALE_STORAGE_KEY } from '../../utils/constants';

import en from '../../locales/en.json';
import pl from '../../locales/pl.json';

export const locales = {
  en,
  pl,
};

export const getLocaleKeys = () => Object.keys(locales);

export const defaultLanguage = getLocaleKeys()[0];

export const getInitialLocale = () => {
  const localStorageLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (localStorageLocale) {
    return localStorageLocale;
  }
  return defaultLanguage;
};

export const LocaleContext = createContext<LocaleContextInterface>(undefined);
const { Provider } = LocaleContext;

export const LocaleContextProvider: FunctionComponent<LocaleContextProviderProps> = ({
  children,
}) => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const localeMessages = useMemo(
    () => (currentLocale in locales ? locales[currentLocale] : {}),
    [currentLocale]
  );

  const setLocale = (locale: LocaleType) => {
    setCurrentLocale(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  };

  return (
    <Provider
      value={{
        locales: getLocaleKeys(),
        currentLocale,
        localeMessages,
        setLocale,
      }}
    >
      {children}
    </Provider>
  );
};
