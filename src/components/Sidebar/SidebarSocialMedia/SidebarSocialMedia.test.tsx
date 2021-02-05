/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SidebarSocialMedia } from './SidebarSocialMedia';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<SidebarSocialMedia />);
  expect(getByText('')).toBeDefined();
});
