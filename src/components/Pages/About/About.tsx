/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../../hooks/useTitle';

export const About: FunctionComponent = () => {
  useTitle('About');

  return <div>about</div>;
};
