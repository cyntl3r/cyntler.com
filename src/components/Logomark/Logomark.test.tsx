/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Logomark } from './Logomark';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Logomark />);
  expect(getByText('')).toBeDefined();
});
