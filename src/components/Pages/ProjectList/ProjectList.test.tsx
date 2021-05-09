/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { ProjectList } from './ProjectList';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<ProjectList />);
  expect(getByText('')).toBeDefined();
});
