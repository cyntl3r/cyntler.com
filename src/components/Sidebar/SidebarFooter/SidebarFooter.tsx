/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';
import {
  SidebarFooterContainer,
  SidebarFooterSocialContainer,
  SidebarFooterText,
  SidebarFooterSocialLink,
} from './SidebarFooter.styles';

const socialMedia = [
  {
    icon: FaFacebookSquare,
    link: 'https://facebook.com/cyntler',
  },
  { icon: FaTwitter, link: 'https://twitter.com/cyntler' },
  { icon: FaLinkedin, link: 'https://linkedin.com/in/cyntler' },
  { icon: FaInstagram, link: 'https://instagram.com/cyntler' },
  { icon: FaGithub, link: 'https://github.com/cyntler' },
  {
    icon: FaStackOverflow,
    link: 'https://stackoverflow.com/users/8890700/cyntler',
  },
];

export const SidebarFooter: FunctionComponent = () => {
  const getSocialIcons = () =>
    socialMedia.map(({ icon: IconComponent, link }) => (
      <SidebarFooterSocialLink
        key={link}
        href={link}
        target="_blank"
        rel="nofollow noopener"
      >
        <IconComponent />
      </SidebarFooterSocialLink>
    ));

  return (
    <SidebarFooterContainer>
      <SidebarFooterText>&copy; Copyright / Damian Cyntler</SidebarFooterText>
      <SidebarFooterText>All rights reserved</SidebarFooterText>
      <SidebarFooterSocialContainer>
        {getSocialIcons()}
      </SidebarFooterSocialContainer>
    </SidebarFooterContainer>
  );
};
