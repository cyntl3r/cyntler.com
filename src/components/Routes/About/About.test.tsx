/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { About } from './About';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<About />);
  expect(getByText('')).toBeDefined();
});
