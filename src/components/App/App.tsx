/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import { MobileHeader } from '../MobileHeader/MobileHeader';

export const App: FunctionComponent = () => (
  <>
    <MobileHeader />
    <Suspense fallback={null}>
      <Switch>
        {routes.map(({ path, exact, component: RouteComponent }) => (
          <Route key={path} path={path} exact={exact}>
            <RouteComponent />
          </Route>
        ))}
      </Switch>
    </Suspense>
  </>
);
