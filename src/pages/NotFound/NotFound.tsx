/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Wrapper, Status } from './NotFound.styles';

export const NotFound: FunctionComponent = () => {
  useTitle('Not Found');

  return (
    <Wrapper>
      <Status>404</Status> Not Found
    </Wrapper>
  );
};
