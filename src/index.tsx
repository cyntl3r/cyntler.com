/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { renderer } from './utils/renderer';
import { Providers } from './components/Providers/Providers';
import { App } from './components/App/App';
import { Coming } from 'react-coming';

const isProduction = process.env.NODE_ENV === 'production';

renderer(
  <Coming enabled={isProduction} toDate="2021-07-01">
    <Providers>
      <App />
    </Providers>
  </Coming>,
  document.querySelector('main')
);
