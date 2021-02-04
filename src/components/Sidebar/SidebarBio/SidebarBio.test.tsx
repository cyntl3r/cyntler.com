/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SidebarBio } from './SidebarBio';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<SidebarBio />);
  expect(getByText('')).toBeDefined();
});
