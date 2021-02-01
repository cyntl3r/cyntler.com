/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { Logo } from './Logo';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Logo />);
  expect(getByText('')).toBeDefined();
});
