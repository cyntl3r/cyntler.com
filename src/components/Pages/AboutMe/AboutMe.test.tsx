/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { AboutMe } from './AboutMe';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<AboutMe />);
  expect(getByText('')).toBeDefined();
});
