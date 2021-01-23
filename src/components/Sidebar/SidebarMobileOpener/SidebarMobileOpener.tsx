/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { FaStream } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  StyledLogomark,
  OpenAsideButton,
} from './SidebarMobileOpener.styles';

export interface SidebarMobileOpenerProps {
  onClick: () => void;
}

export const SidebarMobileOpener: FunctionComponent<SidebarMobileOpenerProps> = ({
  onClick,
}) => (
  <Wrapper>
    <OpenAsideButton onClick={onClick}>
      <FaStream />
    </OpenAsideButton>
    <Link to="/">
      <StyledLogomark />
    </Link>
  </Wrapper>
);
