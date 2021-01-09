/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from './App';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<App />);
  expect(getByText('personal-frontend')).toBeDefined();
});
