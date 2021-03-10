/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Resume } from './Resume';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Resume />);
  expect(getByText('')).toBeDefined();
});
