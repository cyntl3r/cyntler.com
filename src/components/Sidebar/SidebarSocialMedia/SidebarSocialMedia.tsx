/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, cloneElement } from 'react';
import { Wrapper, Link } from './SidebarSocialIcons.styles';
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

const socialMedia = [
  { icon: <FaFacebookSquare />, link: 'https://facebook.com/cyntler' },
  { icon: <FaTwitter />, link: 'https://twitter.com/cyntler' },
  { icon: <FaLinkedin />, link: 'https://linkedin.com/in/cyntler' },
  { icon: <FaInstagram />, link: 'https://instagram.com/cyntler' },
  { icon: <FaGithub />, link: 'https://github.com/cyntler' },
  {
    icon: <FaStackOverflow />,
    link: 'https://stackoverflow.com/users/8890700/cyntler',
  },
];

export const SidebarSocialMedia: FunctionComponent = () => (
  <Wrapper>
    {socialMedia.map(({ icon, link }) => (
      <Link key={link} href={link} target="_blank" rel="noopener noreferrer">
        {cloneElement(icon, { size: 18 })}
      </Link>
    ))}
  </Wrapper>
);
