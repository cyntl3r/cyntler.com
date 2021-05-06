/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { Blog } from './Blog';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Blog />);
  expect(getByText('')).toBeDefined();
});
