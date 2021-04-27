/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { LogoImage } from './Logo.styles';
import { LogoProps } from './Logo.types';

export const Logo: FunctionComponent<LogoProps> = ({
  className,
  size = 2,
  href = '/',
}) => (
  <Link to={href}>
    <LogoImage className={className} size={size} src="/logo.svg" alt="Dc" />
  </Link>
);
