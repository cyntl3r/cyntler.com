/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTranslation } from '../../../hooks/useTranslation/useTranslation';
import { routes } from '../../routes';
import { Wrapper, StyledLink } from './SidebarNavigation.styles';

export const SidebarNavigation: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {routes
        .filter(({ isInNavigationDisplay }) => isInNavigationDisplay)
        .map(({ path, name }) => (
          <StyledLink key={path} to={path}>
            {t(`page.${name}`)}
          </StyledLink>
        ))}
    </Wrapper>
  );
};
