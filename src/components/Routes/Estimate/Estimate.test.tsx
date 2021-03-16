/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Estimate } from './Estimate';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Estimate />);
  expect(getByText('')).toBeDefined();
});
