/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderer } from './utils/renderer';
import { Providers } from './components/Providers/Providers';
import { App } from './components/App/App';
import { screenFadeIn } from './utils/screenFadeIn';

const appElement = document.querySelector('main');

screenFadeIn(appElement);

renderer(
  <Providers>
    <App />
  </Providers>,
  appElement
);
