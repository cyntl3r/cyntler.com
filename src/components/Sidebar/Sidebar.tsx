/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Logomark } from '../Logomark/Logomark';
import { Wrapper } from './Sidebar.styles';

export const Sidebar: FunctionComponent = () => (
  <Wrapper>
    <Logomark />
  </Wrapper>
);
