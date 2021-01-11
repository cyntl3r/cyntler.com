/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Wrapper, Status } from './NotFound.styles';

export const NotFound: FunctionComponent = () => (
  <Wrapper>
    <Status>404</Status> Not Found
  </Wrapper>
);
