/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';
import { Wrapper } from './testing';

const customRenderHook = <Props, CallbackReturn>(
  callback: (props: Props) => CallbackReturn,
  options?: RenderHookOptions<unknown>
) => renderHook(callback, { wrapper: Wrapper, ...options });

export * from '@testing-library/react-hooks';

export { customRenderHook as renderHook };
