/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Seo } from '../../Seo/Seo';

export const NotFound: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('page.home')} />
      not found
    </>
  );
};
