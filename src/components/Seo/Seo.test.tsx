/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Seo } from './Seo';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Seo />);
  expect(getByText('')).toBeDefined();
});
