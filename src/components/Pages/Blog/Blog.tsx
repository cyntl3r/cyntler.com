/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../../hooks/useTitle';

export const Blog: FunctionComponent = () => {
  useTitle('Blog');

  return <div>blog</div>;
};
