/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';
import { LocaleContext } from '../../contexts/localeContext';
import { routes } from '../../routes';

export const App: FunctionComponent = () => {
  const { currentLocale, localeMessages } = useContext(LocaleContext);

  return (
    <IntlProvider locale={currentLocale} messages={localeMessages}>
      <Sidebar />
      <Content>
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map(({ exact, path, children }) => (
              <Route key={path} exact={exact} path={path}>
                {children}
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content>
    </IntlProvider>
  );
};
