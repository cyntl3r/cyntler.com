/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Wrapper } from './SidebarBio.styles';

export const SidebarBio: FunctionComponent = () => {
  const { t } = useTranslation();

  return <Wrapper>{t('sidebar.bio')}</Wrapper>;
};
