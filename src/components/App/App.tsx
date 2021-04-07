/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { routes } from '../routes';

export const App: FunctionComponent = () => (
  <>
    <Sidebar />
    <Suspense fallback={null}>
      <Switch>
        {routes.map(({ path, exact, children }) => (
          <Route key={path} path={path} exact={exact}>
            {children}
          </Route>
        ))}
      </Switch>
    </Suspense>
  </>
);
