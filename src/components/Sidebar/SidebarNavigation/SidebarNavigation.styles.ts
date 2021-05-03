/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarNavigationContainer = styled.nav`
  margin: 30px 0;
  text-align: right;
`;

export const SidebarNavigationLink = styled(NavLink)`
  display: block;
  color: #000000;
  text-decoration: none;
  margin-bottom: 5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid transparent;
  position: relative;

  &.active {
    &::after {
      content: '->';
      position: absolute;
      right: -20px;
      top: 0;
    }
  }
`;
