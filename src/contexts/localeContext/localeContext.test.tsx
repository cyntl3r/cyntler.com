/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { readdirSync } from 'fs';
import { join } from 'path';
import { LOCALE_STORAGE_KEY } from '../../utils/constants';
import {
  getLocaleKeys,
  getInitialLocale,
  defaultLanguage,
} from './localeContext';

test('it imports all locales', () => {
  const importedLocalesLength = getLocaleKeys().length;
  const allLanguagesLength = readdirSync(join(__dirname, '../../locales'))
    .length;

  expect(importedLocalesLength).toBe(allLanguagesLength);
});

test('it returns default locale as an initial locale', () => {
  const initialLocale = getInitialLocale();
  expect(initialLocale).toBe(defaultLanguage);
});

test('it returns locale saved in local storage as an initial locale', () => {
  const locale = getLocaleKeys()[1];
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);

  const initialLocale = getInitialLocale();
  expect(initialLocale).toBe(locale);
});
