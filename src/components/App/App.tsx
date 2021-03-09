/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useWindowBlurChangeTitle } from 'use-window-blur-change-title';
import { Sidebar } from '../Sidebar/Sidebar';
import { routes } from '../routes';
import { useTranslation } from '../../hooks/useTranslation/useTranslation';

export const App: FunctionComponent = () => {
  const { t } = useTranslation();
  useWindowBlurChangeTitle(t('blur_document_title'));

  return (
    <>
      <Sidebar />
      <Suspense fallback={null}>
        <Switch>
          {routes.map(({ exact, path, children }) => (
            <Route key={path} exact={exact} path={path}>
              {children}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </>
  );
};
