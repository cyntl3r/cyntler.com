/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../hooks/useTitle';

export const Projects: FunctionComponent = () => {
  useTitle('Projects');

  return <div>projects</div>;
};
