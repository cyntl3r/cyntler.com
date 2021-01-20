/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Projects } from './Projects';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Projects />);
  expect(getByText('')).toBeDefined();
});
