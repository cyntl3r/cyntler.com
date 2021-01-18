/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Logomark } from '../Logomark/Logomark';
import { PaddingWrapper } from '../PaddingWrapper/PaddingWrapper';
import { SidebarBio } from '../SidebarBio/SidebarBio';
import { SidebarFooter } from '../SidebarFooter/SidebarFooter';
import { SidebarNavigation } from '../SidebarNavigation/SidebarNavigation';
import { SidebarSocialMedia } from '../SidebarSocialMedia/SidebarSocialMedia';
import { Wrapper } from './Sidebar.styles';

export const Sidebar: FunctionComponent = () => (
  <Wrapper>
    <PaddingWrapper>
      <Link to="/">
        <Logomark />
      </Link>
      <SidebarBio />
      <SidebarNavigation />
      <SidebarSocialMedia />
      <SidebarFooter />
    </PaddingWrapper>
  </Wrapper>
);
