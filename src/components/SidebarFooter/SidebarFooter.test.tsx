/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SidebarFooter } from './SidebarFooter';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<SidebarFooter />);
  expect(getByText('')).toBeDefined();
});
