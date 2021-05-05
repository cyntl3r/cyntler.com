/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { MobileHeader } from './MobileHeader';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<MobileHeader />);
  expect(getByText('')).toBeDefined();
});
