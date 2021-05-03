/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Logo } from '../Logo/Logo';
import { SidebarContainer } from './Sidebar.styles';
import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarNavigation } from './SidebarNavigation/SidebarNavigation';

export const Sidebar: FunctionComponent = () => (
  <SidebarContainer>
    <Logo size={3} />
    <SidebarNavigation />
    <SidebarFooter />
  </SidebarContainer>
);
