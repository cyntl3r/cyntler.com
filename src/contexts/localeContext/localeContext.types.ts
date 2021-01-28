/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { ReactNode } from 'react';
import { locales } from './localeContext';

export interface LocaleContextInterface {
  locales: string[];
  currentLocale: string;
  localeMessages: { [key: string]: string };
  setLocale: (locale: string) => void;
}

export interface LocaleContextProviderProps {
  children: ReactNode;
}

export type LocaleType = keyof typeof locales;
