/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Logo } from '../Logo/Logo';
import { MobileHeaderContainer } from './MobileHeader.styles';

export const MobileHeader: FunctionComponent = () => (
  <MobileHeaderContainer>
    <Logo />
  </MobileHeaderContainer>
);
