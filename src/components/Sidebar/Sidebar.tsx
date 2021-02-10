/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PaddingWrapper } from '../App/App.styles';
import { Logo } from '../Logo/Logo';
import { SidebarBio } from './SidebarBio/SidebarBio';
import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarMobileOpener } from './SidebarMobileOpener/SidebarMobileOpener';
import { SidebarNavigation } from './SidebarNavigation/SidebarNavigation';
import { SidebarSocialMedia } from './SidebarSocialMedia/SidebarSocialMedia';
import { Wrapper } from './Sidebar.styles';

export const Sidebar: FunctionComponent = () => {
  const location = useLocation();
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarActive(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    if (isSidebarActive) {
      handleSidebarClose();
    }
  }, [location]);

  return (
    <>
      <SidebarMobileOpener onClick={handleSidebarOpen} />
      <Wrapper isActive={isSidebarActive}>
        <PaddingWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <SidebarBio />
          <SidebarNavigation />
          <SidebarSocialMedia />
          <SidebarFooter />
        </PaddingWrapper>
      </Wrapper>
    </>
  );
};
