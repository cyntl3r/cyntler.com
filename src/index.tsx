/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { GlobalStyles } from './globalStyles';
import { App } from './components/App/App';
import { renderer } from './renderer';
import { BrowserRouter as Router } from 'react-router-dom';

const appElement = document.querySelector('main');

renderer(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  appElement
);

window.addEventListener('load', () => {
  setTimeout(() => {
    appElement.classList.add('loaded');
  }, 200);
});
