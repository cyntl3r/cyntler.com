/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTranslation } from '../../../hooks/useTranslation/useTranslation';
import { Seo } from '../../Seo/Seo';

export const AboutMe: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('about_me_title')} />
      about
    </>
  );
};
