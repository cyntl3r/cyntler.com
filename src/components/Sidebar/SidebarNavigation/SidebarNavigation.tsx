/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { useTranslation } from '../../../hooks/useTranslation/useTranslation';
import { routes } from '../../../routes';
import {
  SidebarNavigationContainer,
  SidebarNavigationLink,
} from './SidebarNavigation.styles';

export const SidebarNavigation = () => {
  const { t } = useTranslation();

  const getRoutes = () =>
    routes
      .filter(({ isInNavigationDisplay }) => isInNavigationDisplay)
      .map(({ name, path }) => (
        <SidebarNavigationLink key={name} to={path}>
          {t(`${name}_title`)}
        </SidebarNavigationLink>
      ));

  return <SidebarNavigationContainer>{getRoutes()}</SidebarNavigationContainer>;
};
