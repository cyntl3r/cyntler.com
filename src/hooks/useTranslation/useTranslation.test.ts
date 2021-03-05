/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderHook, RenderResult } from '../../utils/hooksTesting';
import { useTranslation } from './useTranslation';

let result: RenderResult<ReturnType<typeof useTranslation>>;

beforeEach(() => {
  const { result: renderResult } = renderHook(() => useTranslation());
  result = renderResult;
});

test('it returns translate function', () => {
  expect(typeof result.current.t).toBe('function');
});

test('it translates function returns testing text', () => {
  expect(result.current.t('testing_text')).toBe('test');
});
