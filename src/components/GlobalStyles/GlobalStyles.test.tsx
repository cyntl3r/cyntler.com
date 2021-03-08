/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { render } from '../../utils/testing';
import { GlobalStyles } from './GlobalStyles';

test('injects global styles to head section', () => {
  render(<GlobalStyles />);
  expect(document.head.innerHTML.includes('data-styled="active"')).toBeTruthy();
});
