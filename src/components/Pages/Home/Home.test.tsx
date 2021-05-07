/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { Home } from './Home';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Home />);
  expect(getByText('')).toBeDefined();
});
