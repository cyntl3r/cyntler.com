import {
  createContext,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { locales, getInitialLocale } from '../utils/locales';

export const LocaleContext = createContext(undefined);
const { Provider } = LocaleContext;

export interface LocaleContextProviderProps {
  children: ReactNode;
}

export const LocaleContextProvider: FunctionComponent<LocaleContextProviderProps> = ({
  children,
}) => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const messages = useMemo(() => locales[currentLocale], [currentLocale]);

  const setLocale = (locale: string) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <Provider
      value={{
        locales: Object.keys(locales),
        currentLocale,
        messages,
        setLocale,
      }}
    >
      {children}
    </Provider>
  );
};
