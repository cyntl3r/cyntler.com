/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import en from '../locales/en.json';
import pl from '../locales/pl.json';

export const locales = {
  en,
  pl,
};

export const getInitialLocale = () => {
  const localStorageLocale = localStorage.getItem('locale');
  if (localStorageLocale) {
    return localStorageLocale;
  }
  return Object.keys(locales)[0];
};
