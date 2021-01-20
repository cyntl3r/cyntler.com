/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useTranslation } from '../../../hooks/useTranslation';

export const Home: FunctionComponent = () => {
  const { t } = useTranslation();
  useTitle(t('page.home'));

  return <div>home</div>;
};
