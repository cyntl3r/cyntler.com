/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { IntlProvider } from './IntlProvider';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const res = render(<IntlProvider>test</IntlProvider>);
  console.log(res);
});
