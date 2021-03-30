/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderer } from './utils/renderer';
import { Providers } from './components/Providers/Providers';
import { App } from './components/App/App';
import { Coming } from 'react-coming';

renderer(
  <Providers>
    <Coming toDate="2021-07-01">
      <App />
    </Coming>
  </Providers>,
  document.querySelector('main')
);
