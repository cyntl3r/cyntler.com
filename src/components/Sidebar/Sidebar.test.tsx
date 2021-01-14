/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Sidebar } from './Sidebar';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Sidebar />);
  expect(getByText('')).toBeDefined();
});
