/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NotFound } from './NotFound';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<NotFound />);
  expect(getByText('not found')).toBeDefined();
});
