import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { App } from './App';

afterEach(() => {
  cleanup();
});

test('is wrapper', () => {
  render(<App />);
  expect(screen.getByText('cyntler.com')).toBeDefined();
});
