/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { lazyImport } from '../../utils/lazyImport';

const Home = lazyImport('Home');
const NotFound = lazyImport('NotFound');

export const App: FunctionComponent = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);
