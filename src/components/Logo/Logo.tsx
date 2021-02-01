/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent } from 'react';
import { LogoImage } from './Logo.styles';
import { LogoProps } from './Logo.types';

export const Logo: FunctionComponent<LogoProps> = ({ className }) => (
  <LogoImage src="/logo.svg" alt="Damian Cyntler" className={className} />
);
