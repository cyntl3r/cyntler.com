/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render, cleanup } from '@testing-library/react';
import { EstimateForm } from './EstimateForm';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  const { getByText } = render(<EstimateForm />);
  expect(getByText('')).toBeDefined();
});
