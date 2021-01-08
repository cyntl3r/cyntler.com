/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { GlobalStyles } from './globalStyles';
import { App } from './components/App/App';
import { renderer } from './renderer';

const appElement = document.querySelector('main');

renderer(
  <>
    <GlobalStyles />
    <App />
  </>,
  appElement
);

window.addEventListener('load', () => {
  setTimeout(() => {
    appElement.classList.add('loaded');
  }, 200);
});
