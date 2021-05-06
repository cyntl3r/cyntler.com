/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { Contact } from './Contact';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<Contact />);
  expect(getByText('')).toBeDefined();
});
