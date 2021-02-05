/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SidebarNavigation } from './SidebarNavigation';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<SidebarNavigation />);
  expect(getByText('')).toBeDefined();
});
