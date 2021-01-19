/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../hooks/useTitle';

export const Resume: FunctionComponent = () => {
  useTitle('Resume');

  return <div>resume</div>;
};
