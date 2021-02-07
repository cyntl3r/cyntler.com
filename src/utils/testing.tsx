/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Providers } from '~/components/Providers/Providers';

const Wrapper = ({ children }) => <Providers>{children}</Providers>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
