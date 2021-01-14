/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Content } from './Content';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Content>test</Content>);
  expect(getByText('')).toBeDefined();
});
