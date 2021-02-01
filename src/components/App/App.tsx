/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';
import { routes } from '../../routes';

export const App: FunctionComponent = () => (
  <>
    <Sidebar />
    <Content>
      <Suspense fallback={null}>
        <Switch>
          {routes.map(({ exact, path, children }) => (
            <Route key={path} exact={exact} path={path}>
              {children}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </Content>
  </>
);
