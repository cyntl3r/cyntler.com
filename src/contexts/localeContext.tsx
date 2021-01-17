import {
  createContext,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { LOCALE_STORAGE_KEY } from '../constants';
import en from '../locales/en.json';
import pl from '../locales/pl.json';

export type LocaleContextType = {
  locales: string[];
  currentLocale: string;
  localeMessages: { [key: string]: string };
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>(undefined);
const { Provider } = LocaleContext;

const locales = {
  en,
  pl,
};

const getLocaleKeys = () => Object.keys(locales);

export const getInitialLocale = () => {
  const localStorageLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (localStorageLocale) {
    return localStorageLocale;
  }
  return getLocaleKeys()[0];
};

export interface LocaleContextProviderProps {
  children: ReactNode;
}

export const LocaleContextProvider: FunctionComponent<LocaleContextProviderProps> = ({
  children,
}) => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const localeMessages = useMemo(
    () => (currentLocale in locales ? locales[currentLocale] : {}),
    [currentLocale]
  );

  const setLocale = (locale: string) => {
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
