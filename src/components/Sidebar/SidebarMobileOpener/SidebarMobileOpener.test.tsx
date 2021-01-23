/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SidebarMobileOpener } from './SidebarMobileOpener';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<SidebarMobileOpener onClick={jest.fn()} />);
  expect(getByText('')).toBeDefined();
});
