/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTranslation } from '../../../hooks/useTranslation/useTranslation';
import { Seo } from '../../Seo/Seo';

export const Projects: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('page.projects')} />
      home
    </>
  );
};
