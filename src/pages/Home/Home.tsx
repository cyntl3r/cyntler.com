/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../hooks/useTitle';

export const Home: FunctionComponent = () => {
  useTitle('Me & Blog');

  return <div>home</div>;
};
