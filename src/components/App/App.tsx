/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

export const App: FunctionComponent = () => (
  <Switch>
    <Route exact path="/">
      <div>demo</div>
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);
