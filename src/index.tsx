/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderer } from '~/utils/renderer';
import { Providers } from '~/components/Providers/Providers';
import { App } from '~/components/App/App';

const appElement = document.querySelector('main');

renderer(
  <Providers>
    <App />
  </Providers>,
  appElement
);

window.addEventListener('load', () => {
  appElement.classList.add('loaded');
});
