/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import { useTranslation } from '../../../hooks/useTranslation';

export const Resume: FunctionComponent = () => {
  const { t } = useTranslation();
  useTitle(t('page.resume'));

  return <div>resume</div>;
};
